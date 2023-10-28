import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { client } from '../../libs/client';
import { Column } from '../../types/column';
import parse from 'html-react-parser';
import CheckIcon from '@mui/icons-material/Check'; // You can choose a suitable icon
import { styled } from '@mui/system';
import he from 'he';
import { NextSeo } from 'next-seo';
import { blurSushi } from '../../utils/util';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '100%',
  border: '1px solid red',
  borderRadius: '5px',
  padding: '10px',
}));

const ImageBox = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  margin: 'auto',
}));

type Props = {
  column: Column;
};

const ColumnId: React.FC<Props> = ({ column }) => {
  const options = {
    replace: (domNode: any) => {
      if (domNode.name && domNode.name === 'ul') {
        return (
          <CustomBox>
            <div style={{ display: 'flex' }}>
              <CheckIcon />
              <span>タイトル</span>
              {parse(domNode.children)}
            </div>
          </CustomBox>
        );
      }
    },
  };

  return (
    <>
      <NextSeo
        title={column.title}
        description={`This article titled "${column.title}" was published on ${column.publishedAt}.`}
        openGraph={{
          title: column.title,
          description: `This article titled "${column.title}" was published on ${column.publishedAt}.`,
          url: `https://osushi.life/columns/${column.id}`,
          images: [
            {
              url: column.eyecatch.url,
              width: column.eyecatch.width,
              height: column.eyecatch.height,
              alt: column.title,
            },
          ],
          site_name: 'おすし性格診断',
        }}
        twitter={{
          handle: '@broiled_engawa',
          site: '@broiled_engawa',
          cardType: 'summary_large_image',
        }}
      />
      <Box sx={{ px: 2 }}>
        {column.eyecatch && (
          <ImageBox>
            <Image
              src={column.eyecatch.url}
              alt={column.title}
              width={800}
              height={600}
              placeholder="blur"
              blurDataURL={blurSushi}
              objectFit="cover"
              layout="responsive"
            />
          </ImageBox>
        )}
        <Typography
          variant="h1"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            width: '100%',
            py: 1,
          }}
        >
          {column.title}
        </Typography>
        <Box dangerouslySetInnerHTML={{ __html: he.decode(column.content) }} />
      </Box>
    </>
  );
};

export default ColumnId;

export const getStaticPaths = async () => {
  const limit = 1000;
  const queries = { limit: limit };
  const data = await client.get({ endpoint: 'columns', queries: queries });

  const paths = data.contents.map(
    (content: { id: string }) => `/column/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;

  const data = await client.get({
    endpoint: 'columns',
    contentId: id,
  });

  return {
    props: {
      column: data,
    },
  };
};
