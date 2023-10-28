import { Box, LinearProgress, Typography } from '@mui/material';

type Props = {
  progress: number;
};
const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        bgcolor: 'white',
        zIndex: 100,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          flexGrow: 1,
          marginRight: 2,
          height: '10px',
          borderRadius: '20px',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'rgb(89, 118, 138)',
            borderRadius: '20px',
          },
        }}
      />
      <Typography
        variant="body1"
        fontWeight="bold"
        color="rgb(81, 89, 106)"
      >{`${Math.round(progress)}%`}</Typography>
    </Box>
  );
};

export default ProgressBar;
