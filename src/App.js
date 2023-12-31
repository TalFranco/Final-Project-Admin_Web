import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { adminContext } from './adminContext';

// ----------------------------------------------------------------------

export default function App() {
  const [loggedAdmin, setLoggedAdmin] = useState('');

  useEffect(() => {
    const storedLoggedAdmin = localStorage.getItem('loggedAdmin');
    if (storedLoggedAdmin) {
      setLoggedAdmin(JSON.parse(storedLoggedAdmin));
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <adminContext.Provider
            value={{
              loggedAdmin,
              setLoggedAdmin,
            }}
          >
            <ScrollToTop />
            <StyledChart />
            <Router />
          </adminContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
