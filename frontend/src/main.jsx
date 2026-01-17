import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import { pageview } from './pages/analytics.jsx';

function AppWrapper() {
  const location = useLocation();

  useEffect(() => {
    // Track pageview whenever route changes
    pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>
);
