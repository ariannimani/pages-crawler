import React, { useState } from 'react';
import { Box, Button, CircularProgress, TextField } from '@material-ui/core';

import { useCrawlContext } from '../../../../context';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [url, setUrl] = useState();
  const { addPage, isUpdating } = useCrawlContext();

  return (
    <Box className={styles.searchContainer}>
      <TextField id='standard-basic' label='Enter page URL' className={styles.urlInput} onChange={e => setUrl(e.target.value)} />
      <Button variant='contained' color='primary' disabled={isUpdating} onClick={() => addPage(url)} className={styles.addButton}>
        {!isUpdating ? 'Add Page' : <CircularProgress size={'1rem'} />}
      </Button>
    </Box>
  );
};

export default SearchBar;
