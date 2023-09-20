import React from 'react';
import { Box, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import Elipse from '../../../../../Elipse/Elipse';
import { useState } from 'react';

const PageBox = () => {
  const [isVisible, setIsvisible] = useState(false);

  const onClickHandler = () => {
    setIsvisible(!isVisible);
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='subtitle2'>http://facebook.com</Typography>
        <Box style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Typography variant='subtitle2' style={{ color: '#8A8A8A' }}>
            June 12, 2022
          </Typography>
          <Box style={{ position: 'relative' }}>
            <MoreVertIcon style={{ color: '#CCCFD6', cursor: 'pointer' }} onClick={onClickHandler} />
            {isVisible && (
              <Paper style={{ position: 'absolute' }}>
                <MenuList autoFocusItem={false} id='menu-list-grow' onKeyDown={() => {}}>
                  <MenuItem onClick={() => {}} style={{ color: '#CCCFD6', cursor: 'pointer' }}>
                    <DeleteIcon /> Delete
                  </MenuItem>
                </MenuList>
              </Paper>
            )}
          </Box>
        </Box>
      </Box>
      <Typography variant='h3'>Facebook - log in or sign up</Typography>
      <Typography variant='subtitle1'>
        Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send
        messages and get updates.
      </Typography>
      <Box style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#667085' }}>
        <Typography variant='subtitle1'>H x 12</Typography>
        <Elipse />
        <Typography variant='subtitle1'>H x 12</Typography>
        <Elipse />
        <Typography variant='subtitle1'>H x 12</Typography>
      </Box>
    </Box>
  );
};

export default PageBox;
