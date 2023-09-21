import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { PageBox } from './components';

const List = ({ link, id }) => {
  return (
    <Box style={{ display: 'flex', gap: '30px', alignItems: 'center', marginBottom: '24px' }}>
      <Typography variant='h1' style={{ fontSize: '2.5', fontWeight: '400' }}>
        {id}
      </Typography>
      <PageBox link={link} />
    </Box>
  );
};

export default List;
