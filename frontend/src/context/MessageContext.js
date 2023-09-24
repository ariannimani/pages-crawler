import React, { useContext, useState, useCallback, createContext } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const MessageContext = createContext();

export const useMessage = isLoading => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState('info');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setMessage(null);
  };

  const displayMessage = useCallback((msg, sev) => {
    if (['success', 'error', 'warning', 'info'].includes(sev)) {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
    } else {
      console.warn('Invalid severity passed:', sev);
      return;
    }

    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, []);

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  return (
    <MessageContext.Provider
      value={{
        success: msg => displayMessage(msg, 'success'),
        error: msg => displayMessage(msg, 'error'),
        info: msg => displayMessage(msg, 'info')
      }}>
      {children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </MessageContext.Provider>
  );
};
