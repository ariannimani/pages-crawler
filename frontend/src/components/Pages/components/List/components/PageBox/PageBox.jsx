import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box, Link, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';

import Elipse from '../../../../../Elipse/Elipse';
import ToolTip from '../../../../../ToolTip/ToolTip';
import { useCrawlContext } from '../../../../../../context';
import { formatDate, mergeElements, truncateString } from '../../../../../../utils';
import styles from './PageBox.module.scss';

const PageBox = ({ page }) => {
  const { url, title, description, h1, h2, links, creationDate } = page;
  const { deletePage } = useCrawlContext();

  const [isVisible, setIsvisible] = useState(false);

  const onClickHandler = () => {
    setIsvisible(!isVisible);
  };

  const onDeletePageHandler = () => {
    deletePage(url, creationDate);
    setIsvisible(false);
  };

  const list = mergeElements(h1, h2, links);

  return (
    <Box className={styles.pageContainer}>
      <Box className={styles.linkHeader}>
        <Link href={url} color='inherit' target='_blank' rel='noopener noreferrer'>
          {truncateString(url)}
        </Link>
        <Box className={styles.linkActions}>
          <Typography variant='subtitle2' className={styles.dateText}>
            {formatDate(creationDate)}
          </Typography>
          <Box style={{ position: 'relative' }}>
            <MoreVertIcon className={styles.menuIcon} onClick={onClickHandler} />
            {isVisible && (
              <Paper className={styles.menu}>
                <MenuList autoFocusItem={false} id='menu-list-grow'>
                  <MenuItem onClick={onDeletePageHandler} style={{ color: '#CCCFD6', cursor: 'pointer' }}>
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
      <Box className={styles.elementList}>
        {list.map(element => (
          <ToolTip element={element} />
        ))}
        <Elipse />
      </Box>
    </Box>
  );
};

export default PageBox;
