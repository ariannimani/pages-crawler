import React from 'react';
import { Box, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import Elipse from '../../../../../Elipse/Elipse';
import { useState } from 'react';
import { formatDate } from '../../../../../../utils';
import agent from '../../../../../../agent/agent';
const PageBox = ({ link }) => {
  const { url, title, description, h1, h2, links, creationDate, updateDate } = link;

  const [isVisible, setIsvisible] = useState(false);

  const onClickHandler = () => {
    setIsvisible(!isVisible);
  };
  const deleteCawlHandler = () => {
    agent.Crawler.deleteCrawl(`${url}`)
      .then(res => {
        console.log({ res });
      })
      .catch(e => {
        console.log({ e });
      });
  };
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='subtitle2'>{url}</Typography>
        <Box style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Typography variant='subtitle2' style={{ color: '#8A8A8A' }}>
            {formatDate(creationDate)}
          </Typography>
          <Box style={{ position: 'relative' }}>
            <MoreVertIcon style={{ color: '#CCCFD6', cursor: 'pointer' }} onClick={onClickHandler} />
            {isVisible && (
              <Paper style={{ position: 'absolute' }}>
                <MenuList autoFocusItem={false} id='menu-list-grow' onKeyDown={() => {}}>
                  <MenuItem onClick={deleteCawlHandler} style={{ color: '#CCCFD6', cursor: 'pointer' }}>
                    <DeleteIcon /> Delete
                  </MenuItem>
                </MenuList>
              </Paper>
            )}
          </Box>
        </Box>
      </Box>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='subtitle1'>{description}</Typography>
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
