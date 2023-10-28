import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { PERSONALITY_TYPES } from '../data/types';

import he from 'he';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { blurSushi } from '../utils/util';

type PersonalityType = {
  title: string;
  type: string;
  remark: string;
  image: string;
  description: string;
  compatibleType: CompatibleType[];
};

type CompatibleType = {
  title: string;
  type: string;
  image: string;
  combination: string;
  remark: string;
  description: string;
};

const PersonalityPage: NextPage = () => {
  const router = useRouter();
  const [selectedPersonality, setSelectedPersonality] =
    useState<PersonalityType>(PERSONALITY_TYPES[0]);

  const handleClick = (personality: PersonalityType) => {
    setSelectedPersonality(personality);
  };

  return (
    <>
      <NextSeo
        title="性格タイプ一覧"
        description="当サイトの性格タイプ一覧についての情報です。"
      />
      <Box>
        <Box
          sx={{
            width: '100vw',
            p: 2,
            boxShadow: '3px 3px 6px 0px rgba(0, 0, 0, 0.4);',
            backgroundImage: "url('wood.jpeg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Grid container sx={{ maxWidth: '1000px', mx: 'auto' }}>
            {Object.values(PERSONALITY_TYPES).map(
              (personality: PersonalityType, index: number) => (
                <Grid item xs={4} sm={3} md={3} lg={3} key={index}>
                  <Paper
                    elevation={2}
                    onClick={() => handleClick(personality)}
                    sx={{ bgcolor: 'transparent', m: 0.5 }}
                  >
                    <Box display="flex">
                      <Box
                        sx={{
                          borderRadius: '50%',
                          bgcolor: 'transparent',
                          p: 0.5,
                        }}
                      >
                        <Image
                          src={personality.image}
                          alt={personality.title}
                          placeholder="blur"
                          blurDataURL={blurSushi}
                          width={25}
                          height={25}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.7rem',
                          m: 'auto',
                          fontWeight: 'bold',
                        }}
                      >
                        {personality.type}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              )
            )}
          </Grid>
        </Box>
        {selectedPersonality && (
          <Box
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              mt={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box mb={0.5}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {selectedPersonality.remark}寿司
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '2rem' },
                    my: 'auto',
                  }}
                >
                  {selectedPersonality.type}型
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: '1rem' }, my: 'auto' }}
                >
                  ({selectedPersonality.title})
                </Typography>
              </Box>
              <Box
                sx={{
                  my: 4,
                  display: 'flex',
                  borderRadius: '50%',
                  width: { xs: '250px', sm: '300px' },
                  height: { xs: '250px', sm: '300px' },
                  bgcolor: '#fffcf2',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={selectedPersonality.image}
                  alt={selectedPersonality.title}
                  placeholder="blur"
                  blurDataURL={blurSushi}
                  width={200}
                  height={200}
                />
              </Box>
              <Box
                sx={{
                  px: 2,
                  fontWeight: 'bold',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.7,
                }}
                dangerouslySetInnerHTML={{
                  __html: he.decode(selectedPersonality.description),
                }}
              />
            </Box>
            <Box sx={{ px: 2, mt: 5 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontSize: '1.3rem',
                  pb: 0.5,
                  mb: 3,
                  borderBottom: '1px solid lightgray',
                }}
              >
                🐟 相性の良いタイプ
              </Typography>
              {selectedPersonality.compatibleType.map(
                (compatibleSushi: CompatibleType) => (
                  <Box
                    key={compatibleSushi.title}
                    sx={{
                      display: 'flex',
                      mb: 2,
                      pb: 2,
                      borderBottom: '1px solid lightgray',
                    }}
                  >
                    <Image
                      src={compatibleSushi.image}
                      alt={compatibleSushi.title}
                      placeholder="blur"
                      blurDataURL={blurSushi}
                      width={80}
                      height={80}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                      >
                        {compatibleSushi.type} ({compatibleSushi.title})
                      </Typography>
                      <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                        {compatibleSushi.combination}
                      </Typography>

                      <Typography sx={{ fontSize: '0.9rem' }}>
                        {compatibleSushi.description}
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
            <Button
              variant="contained"
              sx={{
                mx: 'auto',
                mt: 3,
                borderRadius: '15px',
                color: 'white',
                fontWeight: 'bold',
                backgroundColor: 'rgb(89, 118, 138)',
                '&:hover': {
                  backgroundColor: 'rgb(89, 118, 138)',
                },
              }}
              onClick={() => router.push('/test')}
            >
              性格診断してみる
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default PersonalityPage;
