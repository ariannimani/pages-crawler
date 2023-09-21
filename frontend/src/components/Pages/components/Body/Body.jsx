import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { List } from '../';
import agent from '../../../../agent/agent';
import Pagination from '@material-ui/lab/Pagination';

const Body = () => {
  const [links, setLinks] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const startingIndex = (page - 1) * 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (links[page]) {
      return;
    }

    agent.Crawler.getHistory(page)
      .then(res => {
        setLinks(prevLinks => ({
          ...prevLinks,
          [page]: res.data
        }));
        setTotalPages(res.totalPages);
      })
      .catch(e => {
        console.log({ e });
      });
  }, [page, links]);

  const currentLinks = links[page] || [];

  return (
    <Box>
      <Typography variant='h2' style={{ textAlign: 'left', margin: '20px 0' }}>
        Crawled Pages
      </Typography>
      {currentLinks.map((link, index) => (
        <List link={link} id={startingIndex + index + 1} />
      ))}
      <Pagination count={totalPages} shape='rounded' color='#2D6FF6' style={{ float: 'right' }} page={page} onChange={handlePageChange} />
    </Box>
  );
};

export default Body;
