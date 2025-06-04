import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsightsIcon from '@mui/icons-material/Insights';
import VisibilityIcon from '@mui/icons-material/Visibility';

const indianRed = '#CD5C5C';
const indianBlue = '#1A237E';
const lightCream = '#FFF8E1';

const keyPoints = [
  {
    icon: <InsightsIcon sx={{ color: indianBlue }} />,
    title: 'Our Mission',
    description:
      'To provide reliable and efficient logistics services with a strong focus on accuracy, speed, and customer satisfaction. We ensure every shipment arrives safely and on time, no matter the destination.',
  },
  {
    icon: <VisibilityIcon sx={{ color: indianBlue }} />,
    title: 'Our Vision',
    description:
      'To be a globally recognized name in logistics by offering innovative supply chain solutions and maintaining long-term partnerships with clients worldwide.',
  },
  {
    icon: <CheckCircleIcon sx={{ color: indianRed }} />,
    title: 'Global Reach',
    description:
      'Operating since 1980 in Jordan, SDU_WURTH_WAREHOUSE has expanded operations across borders, offering seamless international logistics services.',
  },
  {
    icon: <CheckCircleIcon sx={{ color: indianRed }} />,
    title: 'Technology-Driven',
    description:
      'We use modern logistics software to track, manage, and optimize the entire transportation and warehouse process in real-time.',
  },
  {
    icon: <CheckCircleIcon sx={{ color: indianRed }} />,
    title: 'Customer-Centric Approach',
    description:
      'Our dedicated team ensures personalized logistics solutions for every client, from small businesses to multinational corporations.',
  },
];

const Highlight = ({ text }) => (
  <Box component="span" sx={{ fontWeight: 'bold', color: indianRed }}>{text}</Box>
);

const AboutUs = () => (
  <Container sx={{ py: 5 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" color={indianRed} gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" color="text.secondary" maxWidth="800px" mx="auto">
        <strong>SDU_WURTH_WAREHOUSE</strong> is a trusted logistics provider headquartered in{' '}
        <Highlight text="Jordan" />. Since 1980, we have been delivering end-to-end supply chain solutions tailored to client needs.
        <br /><br />
        Our expertise spans across <strong>warehousing</strong>, <strong>transportation</strong>, and <strong>customs clearance</strong>. 
        With a fleet of modern vehicles, advanced tracking systems, and a skilled workforce, we’re dedicated to moving your business forward.
        <br /><br />
        Whether it's domestic freight or international cargo, <strong>SDU_WURTH_WAREHOUSE</strong> is your partner in logistics excellence.
      </Typography>
    </Box>

    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <img
          src="https://images.unsplash.com/photo-1581092334507-1b7e6c5fe331"
          alt="Warehouse logistics"
          style={{
            width: '100%',
            maxHeight: '350px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h6" sx={{ color: indianBlue }} gutterBottom>
              What Drives Us 
            </Typography>
            <List>
              {keyPoints.map((item, index) => (
                <ListItem key={index} disableGutters alignItems="flex-start">
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight="bold" color="black">
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default AboutUs;
