import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { blurSushi } from '../utils/util';

interface GlassBoxProps {
  imageSrc: string;
  altText: string;
  description: string;
  priority?: boolean;
  lazy?: boolean;
}

export const GlassBox: React.FC<GlassBoxProps> = ({
  imageSrc,
  altText,
  description,
  priority = false,
  lazy,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: 'center',
        gap: 2,
        p: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(30px)',
        width: '100%',
        height: { xs: 100, md: 200 },
        borderRadius: 1,
        boxShadow: 1,
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: { xs: 50, md: 80 },
          height: { xs: 50, md: 80 },
          position: 'relative',
        }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          placeholder="blur"
          blurDataURL={blurSushi}
          fill
          objectFit="contain"
          priority={priority}
          loading={lazy ? 'lazy' : 'eager'}
        />
      </Box>
      <Box>
        <Typography sx={{ color: 'rgb(81, 89, 106)', fontWeight: 'bold' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
