import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const whyPoints = [
  'Efficient & Timely Delivery Across Regions',
  'State-of-the-Art Warehousing Solutions',
  'Robust Supply Chain Management',
  'Real-Time Tracking & Transparent Operations',
  'Customized Logistics & Distribution Services',
  'Trusted Partner for Businesses of All Sizes',
];

const WhyChoose = () => (
  <Box sx={{ py: 6, px: 2, backgroundColor: '#f7f9fc' }}>
    <Grid
      container
      spacing={4}
      direction={{ xs: 'column', md: 'row' }}
      alignItems="center"
    >
      {/* Left Side Image */}
      <Grid item xs={12} md={6}>
        <motion.img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Why Choose SDU Wurth Warehouse"
          style={{
            width: '100%',
            borderRadius: '12px',
            maxHeight: '450px',
            objectFit: 'cover',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </Grid>

      {/* Right Side Points */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ fontWeight: 'bold', color: '#001F3F' }}
          >
            Why Choose SDU Wurth Warehouse
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ mb: 3, color: '#001F3F', fontSize: '1.1rem', lineHeight: 1.6 }}
          >
            At SDU Wurth Warehouse, we deliver excellence in logistics with cutting-edge technology and a customer-centric approach. Here’s why businesses trust us for their supply chain needs:
          </Typography>
          <List>
            {whyPoints.map((point, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: '#FF0000' }} /> {/* Indian Red */}
                </ListItemIcon>
                <ListItemText 
                  primary={point} 
                  primaryTypographyProps={{ sx: { color: '#001F3F', fontWeight: 600 } }} 
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Grid>
    </Grid>
  </Box>
);

export default WhyChoose;
