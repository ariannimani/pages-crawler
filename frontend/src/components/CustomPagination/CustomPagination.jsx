import React from 'react';
import { Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import styles from './CustomPagination.module.scss';

const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Pagination
      style={{ float: 'right' }}
      count={count}
      page={page}
      onChange={onChange}
      color='primary'
      shape='rounded'
      showFirstButton
      showLastButton
      renderItem={item => {
        if (item.page <= 3 || item.page === count || item.page === page || item.page === page + 1 || item.page === page - 1) {
          return <PaginationItem {...item} />;
        }

        if (item.page === 4 && page > 5) {
          return <Box className={styles.pagination}> ... </Box>;
        }

        if (item.page === count - 1 && page < count - 2) {
          return <Box className={styles.pagination}> ... </Box>;
        }

        return null;
      }}
    />
  );
};

export default CustomPagination;
