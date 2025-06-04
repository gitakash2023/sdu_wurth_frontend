import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Collapse,
  Snackbar,
} from '@mui/material';
import CustomButton from './CustomButton';
import { ExpandMore, Edit, Delete } from '@mui/icons-material';

const JobCard = ({
  job,
  index,
  expanded,
  handleExpandClick,
  truncateDescription,
  onEdit,
  onDelete,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleApplyClick = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Card sx={{ borderRadius: '10px', boxShadow: 3, display: 'flex', flexDirection: 'column', minHeight: '440px', border: '1px solid #001F3F' }}>
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
        <Typography variant="body2" sx={{ color: '#555' }}>
          <strong>Salary:</strong> {job.salary}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            <strong>Description:</strong>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
            {truncateDescription(job.description, 20)}
          </Typography>
          <CustomButton
            variant="text"
            label={expanded === index ? 'Show Less' : 'Show More'}
            sx={{ mt: 1, color: '#1976d2', backgroundColor: 'transparent' }}
            onClick={() => handleExpandClick(index)}
            endIcon={<ExpandMore />}
          />
          <Collapse in={expanded === index} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
              {job.description}
            </Typography>
          </Collapse>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#001F3F' }}>
            Required Skills:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {job.skills.map((skill, skillIndex) => (
              <Chip key={skillIndex} label={skill} size="small" sx={{ backgroundColor: '#001F3F', color: '#fff', fontWeight: 'bold', borderRadius: '20px' }} />
            ))}
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, mt: 'auto', pb: 2 }}>
        <CustomButton label="Apply Now" onClick={handleApplyClick} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <CustomButton label="Edit" variant="outlined" size="small" onClick={() => onEdit(job)} endIcon={<Edit />} />
          <CustomButton label="Delete" variant="outlined" size="small" color="error" onClick={() => onDelete(job.id)} endIcon={<Delete />} />
        </Box>
      </CardActions>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="To apply, please register or log in."
      />
    </Card>
  );
};

export default JobCard;
