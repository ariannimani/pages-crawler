import React from 'react';
import { Box } from '@material-ui/core';
import { Body, SearchBar } from './components';
import Pagination from '@material-ui/lab/Pagination';

const Pages = () => {
  return (
    <Box>
      <SearchBar />
      <Body />
      <Pagination count={10} shape='rounded' color='#2D6FF6' style={{ float: 'right' }} />
    </Box>
  );
};

export default Pages;
