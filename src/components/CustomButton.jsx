import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ label, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: '20px',
        textTransform: 'none',
        fontWeight: 'bold',
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
