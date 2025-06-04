import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const OurMission = () => (
  <Box sx={{ py: 5 }}>
    <Grid container spacing={4} alignItems="center" direction="row-reverse">
      <Grid item xs={12} md={6}>
        <img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
          alt="Our Mission"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" color="black" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" color="black">
          Our mission is to provide tailored recruitment solutions that drive success for both clients and candidates.
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default OurMission;
