import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Chip } from '@mui/material';

const JobForm = ({ onSubmit, initialData }) => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    skills: [],
    skillInput: '',
  });

  useEffect(() => {
    if (initialData) {
      setJobData({ ...initialData, skillInput: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleAddSkill = () => {
    if (jobData.skillInput.trim()) {
      setJobData(prev => ({
        ...prev,
        skills: [...prev.skills, prev.skillInput.trim()],
        skillInput: '',
      }));
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setJobData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove),
    }));
  };

  const handleSubmit = () => {
    onSubmit(jobData);
    setJobData({
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
      skills: [],
      skillInput: '',
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
      <TextField label="Title" name="title" value={jobData.title} onChange={handleChange} />
      <TextField label="Company" name="company" value={jobData.company} onChange={handleChange} />
      <TextField label="Location" name="location" value={jobData.location} onChange={handleChange} />
      <TextField label="Salary" name="salary" value={jobData.salary} onChange={handleChange} />
      <TextField
        label="Description"
        name="description"
        value={jobData.description}
        multiline
        rows={4}
        onChange={handleChange}
      />
      <Box>
        <TextField
          label="Add Skill"
          value={jobData.skillInput}
          onChange={(e) => setJobData({ ...jobData, skillInput: e.target.value })}
          onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
        />
        <Button onClick={handleAddSkill} sx={{ ml: 1 }}>
          Add
        </Button>
        <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {jobData.skills.map((skill) => (
            <Chip key={skill} label={skill} onDelete={() => handleRemoveSkill(skill)} />
          ))}
        </Box>
      </Box>
      <Button variant="contained" onClick={handleSubmit}>
        {initialData ? 'Update Job' : 'Post Job'}
      </Button>
    </Box>
  );
};

export default JobForm;
