// components/LatestJobs.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
} from '@mui/material';
import CustomButton from '../components/CustomButton';
import { ArrowBackIos, ArrowForwardIos, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LatestJobs = () => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const jobs = [
    {
      title: 'Warehouse Supervisor',
      company: 'SDU_WURTH_WAREHOUSE',
      location: 'Jordan',
      description:
        'Supervise warehouse operations and staff, ensuring timely and accurate order fulfillment and inventory control.',
      skills: ['Inventory Management', 'Leadership', 'Logistics', 'ERP Systems'],
    },
    {
      title: 'Logistics Coordinator',
      company: 'SDU_WURTH_WAREHOUSE',
      location: 'Jordan',
      description:
        'Coordinate inbound and outbound shipments, manage documentation, and communicate with vendors and shipping agents.',
      skills: ['Shipping', 'Scheduling', 'Excel', 'Supply Chain'],
    },
    {
      title: 'Forklift Operator',
      company: 'SDU_WURTH_WAREHOUSE',
      location: 'Jordan',
      description:
        'Operate forklifts for material handling, loading/unloading trucks, and maintaining safety in the warehouse.',
      skills: ['Forklift Operation', 'Safety Compliance', 'Material Handling'],
    },
    {
      title: 'Inventory Analyst',
      company: 'SDU_WURTH_WAREHOUSE',
      location: 'Jordan',
      description:
        'Analyze stock levels, track trends, and optimize inventory strategies to reduce waste and improve accuracy.',
      skills: ['Data Analysis', 'Inventory Planning', 'Excel', 'Forecasting'],
    },
    {
      title: 'Logistics Manager',
      company: 'SDU_WURTH_WAREHOUSE',
      location: 'Jordan',
      description:
        'Lead logistics operations, oversee supply chain performance, and manage team productivity and KPIs.',
      skills: ['Team Management', 'Supply Chain', 'Problem Solving', 'SAP'],
    },
  ];

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : description;
  };

  const handleApplyClick = () => {
    navigate('/contact-us');
  };

  return (
    <Box sx={{ py: 4, px: 2, backgroundColor: '#f4f4f4', position: 'relative' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 4,
          color: '#001F3F',
        }}
      >
        Latest Jobs
      </Typography>

      {/* Scroll buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <CustomButton
          label="←"
          onClick={() => {
            const container = document.getElementById('job-scroll-container');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}
          endIcon={<ArrowBackIos />}
        />
        <CustomButton
          label="→"
          onClick={() => {
            const container = document.getElementById('job-scroll-container');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}
          endIcon={<ArrowForwardIos />}
        />
      </Box>

      {/* Job Cards */}
      <Box
        id="job-scroll-container"
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: 3,
          pb: 2,
        }}
      >
        {jobs.map((job, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 300,
              maxWidth: 300,
              borderRadius: '10px',
              boxShadow: 3,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #001F3F',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
                {job.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#555', fontWeight: 'bold' }}>
                {job.company}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                <strong>Location:</strong> {job.location}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  <strong>Description:</strong>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                  {expanded === index
                    ? job.description
                    : truncateDescription(job.description, 20)}
                </Typography>

                <CustomButton
                  variant="text"
                  label={expanded === index ? 'Show Less' : 'Show More'}
                  sx={{ mt: 1, color: '#1976d2', backgroundColor: 'transparent' }}
                  onClick={() => handleExpandClick(index)}
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
                  Required Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {job.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: '#001F3F',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '20px',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center', mt: 'auto' }}>
              <CustomButton
                label="Apply Now"
                onClick={handleApplyClick}
                endIcon={<Send />}
              />
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LatestJobs;
