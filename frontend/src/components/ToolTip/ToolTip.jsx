import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';

const ToolTip = ({ element }) => {
  const [showBox, setShowBox] = useState(false);
  console.log({ element });
  const title = `${element.title} x ${element.data.length}`;

  return (
    <Box style={{ position: 'relative' }} onMouseLeave={() => setShowBox(false)}>
      <Typography variant='subtitle1' onMouseEnter={() => setShowBox(true)}>
        {title}
      </Typography>
      {showBox && (
        <Box
          style={{
            width: 400,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#fff',
            marginTop: '5px',
            borderRadius: '5px',
            boxShadow: '0px 2px 7px 0px rgba(0, 0, 0, 0.25)',
            maxHeight: 300,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
          <Box
            style={{
              content: '',
              position: 'absolute',
              top: '-10px',
              left: 30,
              marginLeft: '-5px',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '15px solid #E3E5E9'
            }}
          />
          <Typography variant='subtitle1' style={{ fontWeight: 600, padding: '12px 17px', backgroundColor: '#E3E5E9' }}>
            HTML elements on this page
          </Typography>
          <Box style={{ marginTop: 12, marginLeft: 20 }}>
            <Typography variant='subtitle1' style={{ marginTop: 15 }}>
              {title}
            </Typography>
            {element.data.map(item => (
              <Typography variant='subtitle2' key={item} style={{ marginTop: 15, color: '#667085' }}>
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
