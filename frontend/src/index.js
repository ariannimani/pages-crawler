import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import Router from './Router';
import { MessageProvider } from './context';
import ErrorBoundary from './ErrorBoundary';
import MainHeader from './components/MainHeader/MainHeader';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MessageProvider>
        <MainHeader />
        <Router />
      </MessageProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
