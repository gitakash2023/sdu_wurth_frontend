import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Map = () => {
  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: '#001F3F',
          mb: 3,
          fontSize: '1.8rem',
          letterSpacing: '1px',
        }}
      >
        Our Location
      </Typography>
      
      <Paper
        sx={{
          backgroundColor: '#fff',
          boxShadow: 3,
          borderRadius: '10px',
          overflow: 'hidden',
          maxWidth: '100%',
          padding: 2,
          mb: 3,
        }}
      >
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8826527265775!2d75.78727097527115!3d26.84262206335136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db36a5315c35f%3A0xc1f1f49c063b9e76!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1717684721815!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: '10px',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </Paper>
      
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          color: '#555',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.5,
          letterSpacing: '0.5px',
        }}
      >
        We are located in Mohali, Punjab, India. You can use the map above to find our office location. Feel free to reach out if you have any questions.
      </Typography>
    </Box>
  );
};

export default Map;
