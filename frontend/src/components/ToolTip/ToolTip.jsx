import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import styles from './ToolTip.module.scss';

const ToolTip = ({ element }) => {
  const [showBox, setShowBox] = useState(false);
  const title = `${element.data.length} x ${element.title}`;

  return (
    <Box className={styles.toolTipContainer} onMouseLeave={() => setShowBox(false)}>
      <Typography variant='subtitle1' onMouseEnter={() => setShowBox(true)}>
        {title}
      </Typography>
      {showBox && (
        <Box className={styles.popupBox}>
          <Box className={styles.arrow} />
          <Typography variant='subtitle1' className={styles.header}>
            HTML elements on this page
          </Typography>
          <Box className={styles.content}>
            <Typography variant='subtitle1' className={styles.title}>
              {title}
            </Typography>
            {element.data.map(item => (
              <Typography variant='subtitle2' key={item} className={styles.elementItem}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ToolTip;
