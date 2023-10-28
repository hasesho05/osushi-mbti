import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    text: {
      primary: 'rgb(81, 89, 106)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgb(250, 170, 120)',
          },
          '&:active': {
            backgroundColor: 'rgb(250, 170, 120)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: 'darkgray',
          },
          '&.MuiInputLabel-filled': {
            color: 'gray',
          },
          color: 'gray',
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'darkgray',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          'MuiTypography-root': {
            color: 'black',
          },
        },
      },
    },
  },
});

export default theme;
