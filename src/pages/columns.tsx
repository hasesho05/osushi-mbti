import Link from 'next/link';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Image from 'next/image';
import { Column } from '../types/column';
import { client } from '../libs/client';
import Layout from '../Layouts/Layout';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { DefaultSeo } from 'next-seo';

dayjs.extend(utc);
dayjs.extend(timezone);

type Props = {
  column: Column[];
  totalCount: number;
};

const Posts: React.FC<Props> = ({ column, totalCount }) => {
  console.log(totalCount);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  return (
    <>
      <DefaultSeo
        title="記事一覧 - あなたのウェブサイト"
        description="あなたのウェブサイトの記事一覧ページです。"
        openGraph={{
          type: 'website',
          title: '記事一覧 - あなたのウェブサイト',
          description: 'あなたのウェブサイトの記事一覧ページです。',
          url: 'https://あなたのウェブサイトのURL/column',
          site_name: 'あなたのウェブサイト',
        }}
      />
      <Box sx={{ position: 'relative', width: '100vw', height: 'auto' }}>
        <Image
          src="/column.jpg"
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
        />
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
    </>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'columns' });

  return {
    props: {
      column: data.contents,
      totalCount: data.totalCount,
    },
  };
};
