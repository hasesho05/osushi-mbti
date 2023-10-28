import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

type BarChartProps = {
  leftLabel: string;
  rightLabel: string;
  energyScore: number;
  color: string;
};

const BarChart = ({
  leftLabel,
  rightLabel,
  energyScore,
  color,
}: BarChartProps) => {
  const RightPercent = ((energyScore - 8) / (56 - 8)) * 100;
  const LeftPercent = 100 - RightPercent;

  const isLeftDominant = LeftPercent > RightPercent;

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: isLeftDominant ? color : 'rgb(81, 89, 106)',

            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {`${LeftPercent.toFixed(0)}%`}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: isLeftDominant ? color : 'rgb(155, 159, 170)',

            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {leftLabel}
        </Typography>
      </Box>
      <Box
        mx={2}
        sx={{
          position: 'relative',
          mb: 1,
          width: { xs: '200px', sm: '300px', md: '500px' },
        }}
      >
        <LinearProgress
          variant="determinate"
          value={Math.max(LeftPercent, RightPercent)}
          sx={{
            bgcolor: 'rgb(245, 245, 245)',
            height: '13px',
            borderRadius: '10px',
            position: 'absolute',
            width: '100%',

            transform: !isLeftDominant ? 'scaleX(-1)' : 'none',
            right: isLeftDominant ? 0 : 'unset',
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
              borderRadius: '10px',
            },
          }}
        />
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: !isLeftDominant ? color : 'rgb(81, 89, 106)',

            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {`${RightPercent.toFixed(0)}%`}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: !isLeftDominant ? color : 'rgb(155, 159, 170)',

            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {rightLabel}
        </Typography>
      </Box>
    </Box>
  );
};

export default BarChart;
