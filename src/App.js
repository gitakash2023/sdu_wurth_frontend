import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import LatestJobs from './pages/LatestJobs';
import Partners from './pages/Partners';
import WhyChoose from './pages/WhyChoose';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import Footer from './components/Footer'; 
import Auth from './pages/Auth';
import AppDownloadButtonLeft from './components/AppDownloadButtonLeft';
import CompanyPanel from './pages/CompanyPanel';

// Wrapper to use useLocation with Router
const AppContent = () => {
  const location = useLocation();

  // Hide layout on /company-dashboard or any subpath
  const hideLayout = location.pathname.startsWith('/company-dashboard');

  return (
    <>
      {!hideLayout && <Header />}
      {/* {!hideLayout && <AppDownloadButtonLeft />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChoose />} />
        <Route path="/latest-jobs" element={<LatestJobs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup-login" element={<Auth />} />
        <Route path="/company-dashboard" element={<CompanyPanel />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
