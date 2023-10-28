import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const SmallCircleBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(4), // xs size
  height: theme.spacing(4), // xs size
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(5), // sm size and above
    height: theme.spacing(5), // sm size and above
  },
  border: '3px solid gray',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const MediumCircleBox = styled(SmallCircleBox)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const LargeCircleBox = styled(SmallCircleBox)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
