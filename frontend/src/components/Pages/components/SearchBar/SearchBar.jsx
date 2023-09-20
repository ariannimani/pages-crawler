import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

const SearchBar = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <TextField id='standard-basic' label='Enter page URL' style={{ flex: '1 0 0' }} />
      <Button variant='contained' color='primary'>
        Add Page
      </Button>
    </Box>
  );
};

export default SearchBar;
