import React, { useEffect } from 'react';
import './Home.scss';
import agent from '../../agent/agent';
import Logo from '../Logo/Logo';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Theme from '../../theme';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from '@mui/material/Pagination';

const Home = () => {
  useEffect(() => {
    agent.Crawler.getHistory()
      .then(res => {})
      .catch(e => {});
  });

  return (
    <Theme>
      <div className='main'>
        <h1>Start Here</h1>
        <Logo />
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <div>
          <Typography variant='h1'>H1 Text</Typography>
          <Typography variant='h2'>H2 Text</Typography>
          <Typography variant='h3'>H3 Text</Typography>
          <Typography variant='subtitle1'>Primary Paragraph</Typography>
          <Typography variant='subtitle2'>Secondary Paragraph</Typography>
          <TextField id='standard-basic' label='Standard' />
          <DeleteIcon />
          <MoreVertIcon />
          <Pagination count={10} variant='outlined' shape='rounded' />
        </div>
      </div>
    </Theme>
  );
};

export default Home;
