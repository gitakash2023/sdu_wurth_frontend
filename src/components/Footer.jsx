import React from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckIcon from '@mui/icons-material/Check';
import { motion } from 'framer-motion';
import logo from '../assets/sdu_logo.webp'; // Replace with your actual logo path

const iconStyle = {
  color: '#CD5C5C',  // Indian Red for icons
  transition: '0.3s',
  ':hover': {
    transform: 'scale(1.2)',
  },
};

const Footer = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        backgroundColor: '#001F3F',  // Navy Blue background
        color: 'white',
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 6 },
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img
                src={logo}
                alt="SDU Logo"
                style={{ height: '40px', borderRadius: '8px' }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#CD5C5C' }}>
                SDU_WURTH_WAREHOUSE
              </Typography>
            </Box>
            <Typography variant="body2">
              A trusted name in logistics and warehouse management. We provide secure, fast, and efficient warehousing and distribution solutions for businesses of all sizes. Currently operating in <strong style={{ color: '#CD5C5C' }}>Jordan</strong>, and expanding globally.
            </Typography>
            <Typography variant="body2">
              <CheckIcon sx={iconStyle} /> Verified Logistics Services
            </Typography>
            <Typography variant="body2">
              <CheckIcon sx={iconStyle} /> Real-time Tracking
            </Typography>
            <Typography variant="body2">
              <CheckIcon sx={iconStyle} /> Dedicated Client Support
            </Typography>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: '#CD5C5C' }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOnIcon fontSize="small" sx={iconStyle} />
            <Typography variant="body2">Amman, Jordan</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon fontSize="small" sx={iconStyle} />
            <Typography variant="body2">+91 7991492897</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" sx={iconStyle} />
            <Typography variant="body2">contact@sduwurth.com</Typography>
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ color: '#CD5C5C' }}>
            Useful Links
          </Typography>
          {['Home', 'About Us', 'Our Services', 'Clients', 'Contact'].map(
            (link, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  mb: 1,
                  color: 'white',
                  ':hover': {
                    color: '#CD5C5C',
                    transform: 'translateX(5px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {link}
              </Typography>
            )
          )}
        </Grid>
      </Grid>

      {/* Bottom Footer Bar */}
      <Box mt={4} textAlign="center">
        <Box mb={1}>
          <Tooltip title="Facebook" arrow>
            <IconButton component="a" href="#" target="_blank" sx={iconStyle}>
              <FacebookIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton component="a" href="#" target="_blank" sx={iconStyle}>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <IconButton component="a" href="#" target="_blank" sx={iconStyle}>
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} SDU_WURTH_WAREHOUSE. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Developed by Dortex AI Private Limited
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
