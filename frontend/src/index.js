import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.scss';
import Router from './Router';
import { MessageProvider } from './context';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <MessageProvider>
        <Router />
      </MessageProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
