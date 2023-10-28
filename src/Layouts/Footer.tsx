import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#50514F',
        color: '#fff',
        padding: '24px',
        pb: '100px',
      }}
    >
      <small>Copyright © {new Date().getFullYear()}</small>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 300,
          marginTop: '16px',
        }}
      >
        <Link href="/contact">
          <Typography variant="body2">Contact</Typography>
        </Link>
        <Link href="/privacy">
          <Typography variant="body2">Privacy Policy</Typography>
        </Link>
        <Link href="/testimonial">
          <Typography variant="body2">Testimonials</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
