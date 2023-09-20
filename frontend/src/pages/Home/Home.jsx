import React, { useEffect } from 'react';
import './Home.scss';
import Theme from '../../theme';
import agent from '../../agent/agent';
import { Pages } from '../../components';
import Header from '../../components/Header/Header';
import MainHeader from '../../components/MainHeader/MainHeader';

const Home = () => {
  React.useEffect(() => {
    agent.Crawler.getHistory()
      .then(res => {
        console.log({ res });
      })
      .catch(e => {
        console.log({ e });
      });
  });

  return (
    <Theme>
      <MainHeader />
      <div className='main'>
        <Header />
        <Pages />
        {/*<h1>Start Here</h1>
        <Logo />
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <div>
          <Typography variant='h1'>H1 Text</Typography>
          <Typography variant='h2'>H2 Text</Typography>
          <Typography variant='h3'>H3 Text</Typography>
          <Typography variant='subtitle1'>Crawl pages to see their HTML elements (headings, paragraphs, meta tags, links, etc.)</Typography>
          <Typography variant='subtitle2'>Secondary Paragraph</Typography>
          <TextField id='standard-basic' label='Standard' />
          <DeleteIcon />
          <Pagination count={10} shape='rounded' color='#2D6FF6' />
        </div>*/}
      </div>
    </Theme>
  );
};

export default Home;
