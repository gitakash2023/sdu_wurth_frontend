import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, useTheme, useMediaQuery, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80', // logistics truck image
    title: 'Trusted Logistics Partner Since 1980',
    subtitle: 'Delivering excellence across Jordan and beyond for over 40 years.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80', // warehouse logistics
    title: 'Efficient Supply Chain Solutions',
    subtitle: 'Optimizing your logistics with cutting-edge technology and expert service.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80', // cargo ship port
    title: 'Connecting Jordan to the World',
    subtitle: 'Global reach with local expertise for seamless logistics operations.',
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                zIndex: 1,
              }}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                px: 3,
                maxWidth: '900px',
                mx: 'auto',
              }}
            >
              <Typography
                variant={isMobile ? 'h5' : 'h2'}
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  textShadow: '2px 2px 10px rgba(0,0,0,0.9)',
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant={isMobile ? 'body1' : 'h6'}
                sx={{
                  lineHeight: 1.8,
                  textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                }}
              >
                {slide.subtitle}
              </Typography>

              {/* Buttons without marginTop */}
              <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mt={0} pt={4}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navigate('/services')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    textTransform: 'none',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#ff9800',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Our Services
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate('/contact-us')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    textTransform: 'none',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Contact Now
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
