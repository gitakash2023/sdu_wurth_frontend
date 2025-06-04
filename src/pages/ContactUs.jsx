import React, { useState } from 'react';
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Send as SendIcon,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  WhatsApp,
  Telegram,
  Smartphone as SmartphoneIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import CustomButton from '../components/CustomButton';
import MapLocation from '../components/MapLocation';

const purposeTypes = [
  'Post a Job Requirement',
  'Apply for a Job',
  'Job Placement in India',
  'Job Placement Abroad',
  'Resume/CV Writing Help',
  'Language Test Guidance',
  'Interview Preparation',
  'Salary Negotiation Guidance',
  'Request Candidate for Hiring',
  'Internship Placement',
  'Post-Placement Support',
  'Training or Upskilling Inquiry',
  'Partnership / Collaboration',
  'Business Inquiry',
  'Other',
];

const indianRed = '#CD5C5C';
const indianBlue = '#3B5998';

const ContactUs = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example (optional)
    if (!name || !email || !phone || !purpose) {
      alert('Please fill all fields.');
      return;
    }

    try {
      await addDoc(collection(firestore, "messages"), {
        name,
        email,
        phone,
        purpose,
        timestamp: new Date(),
      });
      alert("Message sent!");

      // Clear form after submit
      setName('');
      setEmail('');
      setPhone('');
      setPurpose('');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message.");
    }
  };

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url("https://img.freepik.com/free-photo/blur-hospital_1203-7972.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'stretch',
          p: { xs: 2, sm: 6 },
          gap: 4,
        }}
      >
        {/* Left - Contact Info */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(205, 92, 92, 0.85)', // indian red with opacity
              color: '#fff',
              borderRadius: 2,
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="Contact Banner"
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />

            <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Contact Information
                </Typography>
                <Divider sx={{ mb: 2, borderColor: '#fff' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: indianBlue }} />
                  <Typography>Amman, Jordan</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: indianBlue }} />
                  <Typography>+91 7991492897</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: indianBlue }} />
                  <Typography>support@sdu_wurth_warehouse.com</Typography>
                </Box>
                
              </Box>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                {[Facebook, Twitter, Instagram, LinkedIn, YouTube, WhatsApp, Telegram].map((Icon, idx) => (
                  <IconButton
                    key={idx}
                    sx={{
                      color: indianBlue,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '&:hover': {
                        backgroundColor: indianBlue,
                        color: indianRed,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              backgroundColor: '#f4f4f4',
              borderRadius: 2,
              p: 4,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 'bold',
                color: indianRed,
              }}
            >
              Contact Us
            </Typography>

            <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <TextField
                fullWidth
                label="Your Name"
                placeholder="Enter your name"
                variant="outlined"
                sx={{ mb: 2 }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: indianRed }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Mobile Number"
                placeholder="Enter your mobile number"
                variant="outlined"
                type="tel"
                sx={{ mb: 2 }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SmartphoneIcon sx={{ color: indianRed }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                type="email"
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: indianRed }} />
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Purpose</InputLabel>
                <Select
                  value={purpose}
                  onChange={handlePurposeChange}
                  label="Purpose"
                  variant="outlined"
                  color="primary"
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: indianRed,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: indianBlue,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: indianBlue,
                    },
                  }}
                >
                  {purposeTypes.map((type, index) => (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <CustomButton
                label="Send Message"
                type="submit"
                endIcon={<SendIcon sx={{ color: indianBlue }} />}
                sx={{
                  backgroundColor: indianRed,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: indianBlue,
                    color: '#fff',
                  },
                }}
              />
            </form>
          </Box>
        </motion.div>
      </Box>
      <MapLocation />
    </>
  );
};

export default ContactUs;
