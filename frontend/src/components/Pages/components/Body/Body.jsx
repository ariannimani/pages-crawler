import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Box, CircularProgress, Typography } from '@material-ui/core';

import { List } from '../';
import { useCrawlContext } from '../../../../context';
import styles from './Body.module.scss';

const Body = () => {
  const { pagesData, page, isLoading, totalPages, handlePageChange } = useCrawlContext();
  const startingIndex = (page - 1) * 6;

  if (isLoading)
    return (
      <Box className={styles.loadingContainer}>
        <CircularProgress disableShrink />
      </Box>
    );

  return (
    <Box>
      {pagesData.length > 0 ? (
        <Typography variant='h2' className={styles.headerText}>
          Crawled Pages
        </Typography>
      ) : (
        <Typography variant='subtitle1' className={styles.noPagesText}>
          Currently, there are no pages that have been crawled. Start by adding a new page to crawl!
        </Typography>
      )}
      {pagesData.map((page, index) => (
        <List page={page} id={startingIndex + index + 1} />
      ))}
      {totalPages > 0 && (
        <Pagination
          className={styles.pagination}
          count={totalPages}
          shape='rounded'
          color='#2D6FF6'
          page={page}
          onChange={handlePageChange}
        />
      )}
    </Box>
  );
};

export default Body;
