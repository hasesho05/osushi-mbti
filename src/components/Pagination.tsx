import { Box, Typography } from '@mui/material';
import Link from 'next/link';

type Props = {
  maxPageNumber: number;
  currentPageNumber: number;
};

export const Pagination: React.FC<Props> = ({
  maxPageNumber,
  currentPageNumber,
}) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <Box sx={{ display: 'flex', px: 3, my: 5, gap: 2 }}>
      {currentPageNumber !== 1 && (
        <Link href={`/columns/page/${prevPage}`}>Previous</Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/columns/page/${nextPage}`}>Next</Link>
      )}

      <Typography>
        {currentPageNumber}/{maxPageNumber}
      </Typography>
    </Box>
  );
};
