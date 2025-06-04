import React, { useState } from 'react';
import { Box, Grid, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import JobForm from './JobForm';
import JobCard from './JobCard';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [editJob, setEditJob] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAddOrUpdateJob = (jobData) => {
    if (editJob) {
      setJobs(prev =>
        prev.map(job => (job.id === editJob.id ? { ...jobData, id: job.id } : job))
      );
    } else {
      setJobs(prev => [...prev, { ...jobData, id: Date.now() }]);
    }

    setEditJob(null);
    setOpen(false);
  };

  const handleDelete = (jobId) => {
    setJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const handleExpandClick = (index) => {
    setExpandedIndex(prev => (prev === index ? -1 : index));
  };

  const handleEdit = (job) => {
    setEditJob(job);
    setOpen(true);
  };

  const truncateDescription = (desc, wordLimit) => {
    const words = desc.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : desc;
  };

  const handleOpenForm = () => {
    setEditJob(null);
    setOpen(true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Button variant="contained" onClick={handleOpenForm}>
        + Post New Job
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle>{editJob ? 'Edit Job' : 'Post a New Job'}</DialogTitle>
        <DialogContent>
          <JobForm onSubmit={handleAddOrUpdateJob} initialData={editJob} />
        </DialogContent>
      </Dialog>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {jobs.map((job, index) => (
          <Grid item xs={12} md={6} key={job.id}>
            <JobCard
              job={job}
              index={index}
              expanded={expandedIndex}
              handleExpandClick={handleExpandClick}
              truncateDescription={truncateDescription}
              onApply={() => alert('Apply logic here')}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobBoard;
