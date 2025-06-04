import React from 'react';
import { Box } from '@mui/material';
//import { Link } from 'react-router-dom';

// Import your already created components
import About from './About'; // Example: import AboutUs component

import LatestJobs from './LatestJobs'; // Example: import LatestJobs component
import Testimonials from './Testimonials';
import Partners from './Partners';
import ContactUs from './ContactUs'
import WhyChoose from './WhyChoose';
import Services from './Services';
import PlatformStats from '../components/PlatformStats';
import HeroSection from '../components/HeroSection';

const Home = () => (
  <Box sx={{ py: 5, px: 2 }}>
    {/* Hero Section */}
    

    <HeroSection/>

    {/* About Us Section */}
    <About />

   

    {/* Latest Jobs Section */}
    <LatestJobs />
    <Services/>
    <Testimonials/>
    <Partners/>
    <PlatformStats/>
    <WhyChoose/>
    <ContactUs/>

  </Box>
);

export default Home;
