import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { PageBox } from './components';
import styles from './List.module.scss';

const List = ({ page, id }) => {
  return (
    <Box className={styles.listContainer}>
      <Typography variant='h1' className={styles.idText}>
        {id}
      </Typography>
      <PageBox page={page} />
    </Box>
  );
};

export default List;
