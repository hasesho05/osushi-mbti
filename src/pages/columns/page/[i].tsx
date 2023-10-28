import Link from 'next/link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Image from 'next/image';

import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { NextSeo } from 'next-seo';
import { Column } from '../../../types/column';

import { client } from '../../../libs/client';
import { Pagination } from '../../../components/Pagination';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  column: Column[];
  totalCount: number;
  currentPageNumber: number;
};

const Columns: React.FC<Props> = ({
  column,
  totalCount,
  currentPageNumber,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  return (
    <>
      <NextSeo
        title="コラム一覧 - おすし性格診断"
        description="コラム一覧 - おすし性格診断"
        openGraph={{
          type: 'website',
          title: 'コラム一覧 - おすし性格診断',
          description: 'おすし性格診断の記事一覧ページです。',
          url: `https://osushi.life/columns/${currentPageNumber}`,
          site_name: 'おすし性格診断',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
          height: { xs: '200px', md: '500px' },
        }}
      >
        <Image src="/column.jpg" alt="Banner Image" fill objectFit="cover" />
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100vw',
        }}
      >
        <Divider />
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 3 },
            justifyContent: 'center',
            py: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}>
            PERSONALITY
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}>
            RELATIONSHIP
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}>
            CARRER
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.7rem', md: '1rem' } }}>
            COMMUNICATION
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Box
        sx={{
          mt: 3,
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 2,
          px: 1,
        }}
      >
        {column.map((column) => (
          <Box
            component={Link}
            href={`/column/${column.id}`}
            sx={{
              width: { xs: '90vw', md: '100%' },
              textDecoration: 'none',
              color: 'inherit',
            }}
            key={column.id}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: isMobile ? 'row' : 'column',
                gap: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(30px)',
                borderRadius: 1,
                boxShadow: 1,
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  mx: 'auto',
                  flex: 1,
                  position: 'relative',
                  width: { xs: '100px', md: '300px' },
                  height: { xs: '100px', md: '300px' },
                  maxWidth: { xs: '100px', md: '300px' },
                  minHeight: { xs: '100px', md: '300px' },
                }}
              >
                <Image
                  src={column.eyecatch.url}
                  alt={column.title}
                  fill
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  p: { md: 2 },
                  minHeight: { md: '110px' },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'grey.500',
                    fontSize: { xs: '0.6rem', sm: '0.7rem' },
                  }}
                >
                  {dayjs
                    .utc(column.publishedAt)
                    .tz('Asia/Tokyo')
                    .format('YYYY.MM.DD')}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    mt: 1,
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                  }}
                >
                  {column.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Pagination
        currentPageNumber={currentPageNumber}
        maxPageNumber={Math.ceil(totalCount / 8)}
      />
    </>
  );
};

export default Columns;

type APIResponse = {
  contents: Column[];
  totalCount: number;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const data: APIResponse = await client.get({ endpoint: 'columns' });

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / 8)).map(
    (i) => `/columns/page/${i}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ i: string }>
): Promise<GetStaticPropsResult<Props>> => {
  const numId = parseInt(context.params?.i ?? '1');
  const offset = (numId - 1) * 8;
  const limit = 8;
  const queries = { offset: offset, limit: limit };
  const data: APIResponse = await client.get({
    endpoint: 'columns',
    queries: queries,
  });

  return {
    props: {
      column: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: numId,
    },
  };
};
