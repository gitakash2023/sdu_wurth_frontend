import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const OurVision = () => (
  <Box sx={{ py: 5 }}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
          alt="Our Vision"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="black" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" color="black">
          We envision a world where job searching and hiring are efficient, transparent, and fulfilling.
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default OurVision;
