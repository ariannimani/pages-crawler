import React from 'react';

import Theme from '../../theme';
import { Pages } from '../../components';
import Header from '../../components/Header/Header';
import MainHeader from '../../components/MainHeader/MainHeader';

import './Home.scss';

const Home = () => {
  return (
    <Theme>
      <div className='main'>
        <Header />
        <Pages />
      </div>
    </Theme>
  );
};

export default Home;
