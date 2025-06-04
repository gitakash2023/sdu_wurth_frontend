import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Stack, Box, Button } from '@mui/material';

const TestimonialCard = ({ image, name, profile, selectedCompany, selectedRole, comment }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <Card sx={{ p: 3, boxShadow: 4, borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Avatar src={image} alt={name} sx={{ width: 64, height: 64 }} />
        <Box>
          <Typography variant="h6" fontWeight="bold">{name}</Typography>
          <Typography variant="body2" color="text.secondary">{profile}</Typography>
        </Box>
      </Stack>

      <Typography variant="subtitle2" fontWeight="medium" mb={1}>
        Selected at <strong>{selectedCompany}</strong> as <strong>{selectedRole}</strong>
      </Typography>

      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          "{comment}"
        </Typography>
      </CardContent>

      {comment.length > 100 && (
        <Box mt={1}>
          <Button onClick={toggleExpand} size="small">
            {expanded ? 'Read Less' : 'Read More'}
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default TestimonialCard;
