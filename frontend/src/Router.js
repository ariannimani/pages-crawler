import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './pages';
import { CrawlProvider } from './context';

const Router = () => (
  <BrowserRouter>
    <CrawlProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </CrawlProvider>
  </BrowserRouter>
);

export default Router;
