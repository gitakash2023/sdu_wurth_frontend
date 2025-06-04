import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TimerIcon from '@mui/icons-material/Timer';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Freight & Transportation',
    description:
      'Safe and timely delivery of goods across local, national, and international routes using multi-modal transport solutions.',
  },
  {
    icon: <WarehouseIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Warehousing & Storage',
    description:
      'Modern warehousing facilities with temperature control, inventory management, and security to ensure your goods are safe.',
  },
  {
    icon: <TimerIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Express Delivery',
    description:
      'Fast and reliable express delivery services for time-sensitive shipments, ensuring quick turnaround and on-time arrival.',
  },
  {
    icon: <TrackChangesIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Real-Time Tracking',
    description:
      'Advanced tracking systems that provide real-time updates on your shipments, enhancing transparency and peace of mind.',
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Customs Clearance',
    description:
      'Expert handling of customs documentation and clearance procedures to facilitate hassle-free international shipments.',
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
    title: 'Supply Chain Solutions',
    description:
      'Comprehensive supply chain management services tailored to your business needs for optimized operations and cost savings.',
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: '#f7f9fc' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#001F3F', mb: 6 }}
      >
        Our Logistics Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map(({ icon, title, description }, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
              >
                {icon}
                <Typography
                  variant="h6"
                  sx={{ mt: 2, mb: 1, fontWeight: 'bold', color: '#001F3F' }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                  {description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
