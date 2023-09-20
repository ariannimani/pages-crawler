import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { List } from '../';

const Body = () => {
  return (
    <Box>
      <Typography variant='h2' style={{ textAlign: 'left', margin: '20px 0' }}>
        Crawled Pages
      </Typography>
      <List />
      <List />
    </Box>
  );
};

export default Body;
