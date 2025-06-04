// components/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    name: 'Global Traders Pvt Ltd',
    profile: 'Import/Export Company',
    selectedCompany: 'Client of SDU_WURTH_WAREHOUSE',
    comment: 'SDU_WURTH_WAREHOUSE has transformed our shipment timelines. Their warehousing and handling are top-notch.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    name: 'AgroFresh Distributors',
    profile: 'Food Products Supplier',
    selectedCompany: 'Client of SDU_WURTH_WAREHOUSE',
    comment: 'Reliable and efficient. Their logistics team helped us streamline storage and deliveries to our retailers.',
    image: 'https://images.unsplash.com/photo-1581092919537-4c4c4b91b4c8',
  },
  {
    name: 'UrbanTech Electronics',
    profile: 'Consumer Electronics Seller',
    selectedCompany: 'Client of SDU_WURTH_WAREHOUSE',
    comment: 'We’ve saved time and reduced breakage with SDU_WURTH_WAREHOUSE’s careful packaging and logistics services.',
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fbf57',
  },
  {
    name: 'GreenMart Organics',
    profile: 'Online Grocery Brand',
    selectedCompany: 'Client of SDU_WURTH_WAREHOUSE',
    comment: 'Their warehousing and delivery services have improved our customer experience across cities.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4f234b3ea',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: '#fafafa' }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
        Business Testimonials
      </Typography>
      <Typography align="center" mb={5} sx={{ color: '#555' }}>
        Hear from businesses that trust SDU_WURTH_WAREHOUSE for logistics services
      </Typography>
      <Slider {...settings}>
        {testimonials.map((client, index) => (
          <Box key={index} px={2} sx={{ height: '100%' }}>
            <TestimonialCard {...client} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;
