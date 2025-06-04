import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion'; // For adding animations

const WhoWeAre = () => (
  <Box sx={{ py: 5 }}>
    <Grid container spacing={4}>
      {/* Left Grid for Image */}
      <Grid item xs={12} md={6}>
        <motion.img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702" // Agency/Team image
          alt="Who We Are"
          style={{
            width: '100%',
            borderRadius: '10px',
            maxHeight: '400px', // Optional: limit height to maintain consistency
            objectFit: 'cover', // Ensure images look good on different screen sizes
          }}
          initial={{ opacity: 0, x: -100 }}  // Starts off-screen (left)
          animate={{ opacity: 1, x: 0 }}  // Moves to original position
          transition={{ duration: 1 }}
        />
      </Grid>
      
      {/* Right Grid for Content */}
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}  // Starts off-screen (right)
          animate={{ opacity: 1, x: 0 }}  // Moves to original position
          transition={{ duration: 1.2 }}
        >
          <Typography variant="h4" color="black" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" color="black">
            We are a team of professionals dedicated to connecting talented individuals with the right opportunities. 
            Our aim is to empower job seekers and assist employers in building great teams. 
          </Typography>
          <Typography variant="body1" color="black" paragraph>
            Our team consists of skilled professionals with years of experience in the recruitment and staffing industry. 
            We understand the unique needs of both job seekers and companies, and our goal is to match the right talent with the right job. 
          </Typography>
          <Typography variant="body1" color="black" paragraph>
            Whether you're a job seeker looking for your next career opportunity, or an employer seeking the perfect candidate, 
            we're here to help. Our passion is to make the hiring process easier, faster, and more effective for everyone involved.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  </Box>
);

export default WhoWeAre;
