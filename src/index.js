import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
        }
      }
    },
    MuiCustomFooter: {
      styleOverrides: {
        root: {
          borderTop: '1px solid',
          marginTop: 8,
          paddingTop: 3,
          paddingBottom: 3,
          breakpoints: {
            upSm: {
              paddingTop: 6,
              paddingBottom: 6,
            }
          }
        }
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



reportWebVitals(sendToVercelAnalytics);
