import React, { useEffect, useState, useCallback } from 'react';
import {
  Box, Paper, Typography, Avatar, Button, Divider, List,
  ListItemButton, ListItemText, Dialog, DialogTitle, DialogActions,
  TextField, TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, IconButton, Snackbar, Alert, DialogContent, MenuItem,
  createTheme, ThemeProvider, CssBaseline
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import {
  collection, addDoc, getDocs,
  updateDoc, deleteDoc, doc, query, where
} from 'firebase/firestore';

// Theme
const lightBlueTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#90caf9',
    },
    background: {
      default: '#f4faff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Placeholder component
const Applicants = () => <Typography>👥 View Applicants</Typography>;
const ManageJobs = () => <Typography>📋 Manage Your Jobs</Typography>;

// Company Profile
const CompanyProfile = ({ userEmail }) => {
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '', website: '', location: '' });
  const [editing, setEditing] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const fetchProfile = useCallback(async () => {
    try {
      const profileQuery = query(collection(firestore, 'companyProfiles'), where('createdBy', '==', userEmail));
      const snapshot = await getDocs(profileQuery);
      if (!snapshot.empty) {
        const docData = snapshot.docs[0];
        setProfileData({ ...docData.data(), id: docData.id });
        setFormData({ ...docData.data() });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }, [userEmail]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (profileData?.id) {
        await updateDoc(doc(firestore, 'companyProfiles', profileData.id), formData);
        setSnackbarMessage('Profile updated successfully!');
      } else {
        const docRef = await addDoc(collection(firestore, 'companyProfiles'), {
          ...formData,
          createdBy: userEmail,
        });
        setProfileData({ ...formData, id: docRef.id });
        setSnackbarMessage('Profile created successfully!');
      }
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      setSnackbarMessage('Error saving profile');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDelete = async () => {
    try {
      if (profileData?.id) {
        await deleteDoc(doc(firestore, 'companyProfiles', profileData.id));
        setProfileData(null);
        setFormData({ name: '', description: '', website: '', location: '' });
        setSnackbarMessage('Profile deleted successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      setSnackbarMessage('Error deleting profile');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>🏢 Company Profile</Typography>
      {editing || !profileData ? (
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'grid', gap: 2, maxWidth: 600 }}>
            <TextField label="Company Name" name="name" value={formData.name} onChange={handleChange} required fullWidth />
            <TextField label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={3} fullWidth />
            <TextField label="Website" name="website" value={formData.website} onChange={handleChange} fullWidth />
            <TextField label="Location" name="location" value={formData.location} onChange={handleChange} fullWidth />
            <Box display="flex" gap={2}>
              <Button type="submit" variant="contained">{profileData ? 'Update' : 'Create'}</Button>
              {profileData && <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>}
              {profileData && <Button onClick={() => setEditing(false)}>Cancel</Button>}
            </Box>
          </Box>
        </form>
      ) : (
        <Box>
          <Typography><strong>Name:</strong> {profileData.name}</Typography>
          <Typography><strong>Description:</strong> {profileData.description}</Typography>
          <Typography><strong>Website:</strong> {profileData.website}</Typography>
          <Typography><strong>Location:</strong> {profileData.location}</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => setEditing(true)}>Edit Profile</Button>
        </Box>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>{snackbarMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

// Post Job Component
const PostJob = ({ userEmail }) => {
  const [jobList, setJobList] = useState([]);
  const [formData, setFormData] = useState({
    title: '', category: '', openings: '', jobType: '',
    workLocationType: '', city: '', salary: '', benefits: '',
    description: '', requirements: '', responsibilities: ''
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [openFormDialog, setOpenFormDialog] = useState(false);

  const fetchJobs = useCallback(async () => {
    try {
      const jobsQuery = query(collection(firestore, 'jobs'), where('createdBy', '==', userEmail));
      const data = await getDocs(jobsQuery);
      setJobList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }, [userEmail]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJobId) {
        const jobRef = doc(firestore, 'jobs', editingJobId);
        await updateDoc(jobRef, formData);
        setSnackbarMessage('Job updated successfully!');
      } else {
        await addDoc(collection(firestore, 'jobs'), {
          ...formData,
          createdBy: userEmail
        });
        setSnackbarMessage('Job posted successfully!');
      }
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setFormData({
        title: '', category: '', openings: '', jobType: '',
        workLocationType: '', city: '', salary: '', benefits: '',
        description: '', requirements: '', responsibilities: ''
      });
      setEditingJobId(null);
      setOpenFormDialog(false);
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
      setSnackbarMessage('Error saving job');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleEdit = (job) => {
    setFormData({ ...job });
    setEditingJobId(job.id);
    setOpenFormDialog(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'jobs', id));
      setSnackbarMessage('Job deleted successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
      setSnackbarMessage('Error deleting job');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6">📋 Job Listings</Typography>
        <Button variant="contained" onClick={() => setOpenFormDialog(true)}>Add Job</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobList.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.category}</TableCell>
                <TableCell>{job.city}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>{job.description}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(job)} title="Edit"><EditIcon /></IconButton>
                  <IconButton color="info" title="Review"><VisibilityIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(job.id)} title="Delete"><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openFormDialog} onClose={() => setOpenFormDialog(false)} fullWidth maxWidth="md">
        <DialogTitle>{editingJobId ? 'Update Job' : 'Post a New Job'}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { sm: 'repeat(2, 1fr)', xs: '1fr' }, mt: 1 }}>
              <TextField label="Job Title" name="title" value={formData.title} onChange={handleChange} required fullWidth />
              <TextField label="Category" name="category" value={formData.category} onChange={handleChange} required fullWidth />
              <TextField type="number" label="Openings" name="openings" value={formData.openings} onChange={handleChange} required fullWidth />
              <TextField select label="Job Type" name="jobType" value={formData.jobType} onChange={handleChange} fullWidth>
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </TextField>
              <TextField select label="Work Location Type" name="workLocationType" value={formData.workLocationType} onChange={handleChange} fullWidth>
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="On-site">On-site</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </TextField>
              <TextField label="City" name="city" value={formData.city} onChange={handleChange} fullWidth />
              <TextField label="Salary" name="salary" value={formData.salary} onChange={handleChange} fullWidth />
              <TextField label="Benefits" name="benefits" value={formData.benefits} onChange={handleChange} fullWidth />
              <TextField label="Description" name="description" multiline rows={3} value={formData.description} onChange={handleChange} required fullWidth sx={{ gridColumn: 'span 2' }} />
              <TextField label="Requirements" name="requirements" multiline rows={2} value={formData.requirements} onChange={handleChange} fullWidth sx={{ gridColumn: 'span 2' }} />
              <TextField label="Responsibilities" name="responsibilities" multiline rows={2} value={formData.responsibilities} onChange={handleChange} fullWidth sx={{ gridColumn: 'span 2' }} />
            </Box>
            <DialogActions sx={{ mt: 2 }}>
              <Button onClick={() => setOpenFormDialog(false)}>Cancel</Button>
              <Button type="submit" variant="contained">{editingJobId ? 'Update Job' : 'Post Job'}</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>{snackbarMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

// Main Company Panel
const CompanyPanel = () => {
  const [selectedSection, setSelectedSection] = useState('Post Job');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      const stored = localStorage.getItem('user');
      if (firebaseUser && stored) {
        setUser(JSON.parse(stored));
      } else {
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user');
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'Post Job': return <PostJob userEmail={user?.email} />;
      case 'Manage Jobs': return <ManageJobs />;
      case 'Applicants': return <Applicants />;
      case 'Company Profile': return <CompanyProfile userEmail={user?.email} />;
      default: return <PostJob userEmail={user?.email} />;
    }
  };

  if (!user) return null;

  return (
    <ThemeProvider theme={lightBlueTheme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Paper elevation={3} sx={{ width: 260, p: 2, mr: 2 }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Avatar src={user.photo} sx={{ width: 64, height: 64, mx: 'auto', mb: 1 }} />
              <Typography variant="subtitle1">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
            </Box>
            <Divider />
            <List>
              {['Post Job', 'Manage Jobs', 'Applicants', 'Company Profile'].map((item) => (
                <ListItemButton key={item} selected={selectedSection === item} onClick={() => setSelectedSection(item)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
              <ListItemButton onClick={() => setOpenLogoutDialog(true)}>
                <ListItemText primary="Logout" />
              </ListItemButton>
              <Dialog open={openLogoutDialog} onClose={() => setOpenLogoutDialog(false)}>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogContent>
                  <Typography>Are you sure you want to logout?</Typography>
                </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenLogoutDialog(false)}>Cancel</Button>
                <Button onClick={handleLogout} color="error" variant="contained">Logout</Button>
              </DialogActions>
            </Dialog>

              
            </List>
          </Paper>
          <Box sx={{ flexGrow: 1 }}>{renderContent()}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
  
};

export default CompanyPanel;
