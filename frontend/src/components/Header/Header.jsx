import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Logo from '../Logo/Logo';
const Header = () => {
  return (
    <Box style={{ textAlign: 'center' }}>
      <Logo />
      <Typography variant='h1'>Page Crawler</Typography>
      <Typography variant='subtitle1'>Crawl pages to see their HTML elements (headings, paragraphs, meta tags, links, etc.)</Typography>
    </Box>
  );
};

export default Header;
