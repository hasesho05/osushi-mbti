import { Box, Avatar, Drawer, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState, MouseEvent, KeyboardEvent } from 'react';
import DrawerMenu from './DrawerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { blurSushi } from '../utils/util';

const Header = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState<number>(20);
  const [visible, setVisible] = useState<boolean>(true);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position <= 100) {
        setVisible(true);
      } else if (position > 100 && scrollPosition <= 100) {
        setVisible(false);
      }
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        width: '100vw',
        padding: '0 24px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 10,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Box
        sx={{ position: 'relative', display: 'flex', cursor: 'pointer' }}
        onClick={() => router.push('/')}
      >
        <Image
          src="/sushi/ISTJ.png"
          alt="logo"
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL={blurSushi}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'culumn',
            my: 'auto',
            ml: 1,
            borderBottom: '3px solid lightgray',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              color: 'rgb(242, 95, 92)',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            16
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}
          >
            タイプ性格診断
          </Typography>
        </Box>
      </Box>
      <MenuIcon onClick={toggleDrawer(true)} />
      <Box
        sx={{
          backgroundColor: 'rgb(246, 246, 247)',
          margin: 1,
          position: 'absolute',
          top: -8,
          right: -7,
          padding: 4,
          cursor: 'pointer',
          zIndex: -10,
        }}
        onClick={toggleDrawer(true)}
      ></Box>
      <DrawerMenu open={drawerOpen} onClose={toggleDrawer(false)} />
    </Box>
  );
};

export default Header;
