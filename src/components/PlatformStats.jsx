import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';

const stats = [
  {
    label: 'Total Candidates',
    count: 50000,
    icon: <GroupIcon sx={{ fontSize: 50, color: '#1976d2' }} />,
    bg: '#e3f2fd',
  },
  {
    label: 'Selected Candidates',
    count: 12000,
    icon: <VerifiedIcon sx={{ fontSize: 50, color: '#2e7d32' }} />,
    bg: '#e8f5e9',
  },
  {
    label: 'Partner Companies',
    count: 300,
    icon: <BusinessIcon sx={{ fontSize: 50, color: '#9c27b0' }} />,
    bg: '#f3e5f5',
  },
  {
    label: 'Companies in India',
    count: 220,
    icon: <FlagIcon sx={{ fontSize: 50, color: '#d32f2f' }} />,
    bg: '#ffebee',
  },
  {
    label: 'Companies Abroad',
    count: 80,
    icon: <PublicIcon sx={{ fontSize: 50, color: '#0288d1' }} />,
    bg: '#e0f7fa',
  },
];

const PlatformStats = () => {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
          color: '#333',
        }}
      >
        Platform Overview
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: 'center',
                  backgroundColor: item.bg,
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box mb={2}>{item.icon}</Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: '#333', fontSize: { xs: '1.5rem', sm: '1.7rem' } }}
                >
                  <CountUp end={item.count} duration={2} separator="," />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', mt: 1, fontSize: { xs: '0.95rem', sm: '1rem' } }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlatformStats;
