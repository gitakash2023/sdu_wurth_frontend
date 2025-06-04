import { Box, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

const AppDownloadButtonRight = () => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.yourapp'; // Replace with your app link

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 1300,
        backgroundColor: '#ffd700',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        boxShadow: 3,
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button
        href={playStoreUrl}
        target="_blank"
        rel="noopener"
        startIcon={<GetAppIcon />}
        sx={{
          color: '#1e3c72',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '4px 8px',
          minWidth: 'auto',
        }}
      >
        Download App
      </Button>
    </Box>
  );
};

export default AppDownloadButtonRight;
