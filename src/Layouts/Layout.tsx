import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  isVisibleFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isVisibleFooter = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        width: '100%',
      }}
    >
      <Header />
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          display: 'flex',
          maxWidth: '800px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          pt: 8,
        }}
      >
        {children}
      </Box>
      {isVisibleFooter && <Footer />}
    </Box>
  );
};

export default Layout;
