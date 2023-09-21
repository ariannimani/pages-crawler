import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import agent from '../../../../agent/agent';

const SearchBar = () => {
  const [url, setUrl] = useState();
  console.log({ url });
  const onClickHandler = () => {
    agent.Crawler.crawl(url);
  };
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <TextField id='standard-basic' label='Enter page URL' style={{ flex: '1 0 0' }} onChange={e => setUrl(e.target.value)} />
      <Button variant='contained' color='primary' onClick={onClickHandler}>
        Add Page
      </Button>
    </Box>
  );
};

export default SearchBar;
