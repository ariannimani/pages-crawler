import React, { useState, createContext, useContext, useEffect } from 'react';

import agent from '../agent/agent';

import { useMessage } from './MessageContext';
import { usePage } from '../hooks/usePage';
import { isValidHref } from '../utils/isValidHref';

const CrawlContext = createContext({
  pagesData: [],
  isLoading: false,
  page: 1,
  totalPages: 1,
  isUpdating: false,
  addPage: () => {},
  deletePage: () => {},
  handlePageChange: () => {}
});

const CrawlProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = usePage();
  const message = useMessage();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const pagesData = data[page] || [];

  useEffect(() => {
    if (isUpdating) {
      return;
    }

    setIsLoading(true);
    agent.Crawler.getHistory(page)
      .then(res => {
        setData(prev => ({
          ...prev,
          [page]: res.data
        }));
        setTotalPages(res.totalPages);
      })
      .catch(e => {
        console.log({ e });
      })
      .finally(() => setIsLoading(false));
  }, [page, isUpdating]);

  const addPage = url => {
    if (isValidHref(url)) {
      setIsUpdating(true);
      agent.Crawler.crawl(url)
        .then(() => {
          message.success('Page added successfully!');
        })
        .catch(error => {
          message.error('Error while adding Page!');
          console.error('Error while adding Page:', error);
        })
        .finally(() => {
          setIsUpdating(false);
        });
    } else message.error('Please enter valid URL!');
  };

  const deletePage = url => {
    setIsUpdating(true);
    agent.Crawler.deletePage(url)
      .then(() => {
        message.success('Page deleted successfully!');
      })
      .catch(error => {
        message.error('Error while deleting Page!');
        console.error('Error while deleting Page:', error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <CrawlContext.Provider
      value={{
        page,
        pagesData,
        isLoading,
        isUpdating,
        addPage,
        deletePage,
        totalPages,
        handlePageChange
      }}>
      {children}
    </CrawlContext.Provider>
  );
};

const useCrawlContext = () => {
  const context = useContext(CrawlContext);

  if (!context) {
    throw new Error('useCrawlContext must be used within a CrawlProvider');
  }

  return context;
};

export { CrawlProvider, useCrawlContext };
