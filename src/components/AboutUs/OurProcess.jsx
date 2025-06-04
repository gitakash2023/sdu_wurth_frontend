import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

const steps = [
  {
    title: 'Understand Your Needs',
    description: 'We begin by understanding your business goals and hiring needs.',
    img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
  },
  {
    title: 'Source the Right Talent',
    description: 'We identify, screen, and evaluate top candidates for your roles.',
    img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
  },
  {
    title: 'Placement & Follow-up',
    description: 'We ensure smooth onboarding and follow up to maintain success.',
    img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
  },
];

const OurProcess = () => (
  <Box sx={{ py: 5 }}>
    <Typography variant="h4" color="black" align="center" gutterBottom>
      Our Process
    </Typography>
    <Grid container spacing={4}>
      {steps.map((step, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <img
                src={step.img}
                alt={step.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
              />
              <Typography variant="h6" color="black" gutterBottom>
                Step {index + 1}: {step.title}
              </Typography>
              <Typography variant="body2" color="black">
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OurProcess;
