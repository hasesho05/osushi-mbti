import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { blurSushi } from '../utils/util';
import Image from 'next/image';
import useInterval from 'use-interval';

function IndexPage() {
  const router = useRouter();
  const text =
    'このテストは16種類のタイプに分けてあなたの性格を分析します。\nあなたも知らない自分を知ることができるかもしれません。';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (index < text.length) {
      setDisplayedText((prevText) => prevText + text.charAt(index));
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, 100); // 1秒に10文字表示

  const handleStartTest = () => {
    router.push('/test');
  };

  return (
    <>
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '350px',
          padding: '1rem',
          py: '2rem',
          textAlign: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/16p_top.PNG')",
          color: '#fff',
          position: 'relative',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.4rem', md: '2rem' },
            my: 4,
          }}
        >
          16タイプ診断テストへようこそ🍣
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.3rem' } }}
        >
          {displayedText.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 'auto',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgb(89, 118, 138)',
            '&:hover': {
              backgroundColor: 'rgb(89, 118, 138)',
            },
            '&:active': {
              backgroundColor: 'rgb(89, 118, 138)',
            },
          }}
          onClick={handleStartTest}
        >
          診断スタート
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          marginTop: '2rem',
          alignItems: 'center',
          px: 1,
        }}
      >
        <Box
          sx={{
            bgcolor: 'rgba(242, 163, 132, 0.2)',
            padding: '1rem',
            width: '100%',
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="rgb(242, 163, 132)"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.2rem' },
              fontWeight: 'bold',
            }}
          >
            🧐 16タイプ診断とは？
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            padding: '1rem',
            width: '100%',
            mb: 2,
          }}
        >
          <Box>
            <Image
              src="/sushi/ISTJ.png"
              alt="sushi"
              placeholder="blur"
              blurDataURL={blurSushi}
              width={100}
              height={100}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              16タイプをお寿司で表現
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: { xs: '0.8rem', md: '1rem' },
              }}
            >
              16タイプ診断は、個々の人がどのように世界を理解し、意思決定を行うかを理解するためのフレームワークです。
              <br />
              各タイプは独自の強みとエリアを持ち、それぞれが人間経験の一部を表しています。
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: 'rgba(140, 190, 180, 0.2)',
            padding: '1rem',
            width: '100%',
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="rgb(140, 190, 180)"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.2rem' },
              fontWeight: 'bold',
            }}
          >
            🎁 診断を受けるメリット
          </Typography>
        </Box>
        <Box
          id="benefit"
          sx={{
            display: 'flex',
            padding: '1rem',
            width: '100%',
            mb: 2,
          }}
        >
          <Box>
            <Image
              src="/sushi/ISFJ.png"
              alt="sushi"
              placeholder="blur"
              blurDataURL={blurSushi}
              width={100}
              height={100}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              自分自身を理解する
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: { xs: '0.8rem', md: '1rem' },
              }}
            >
              自分自身を深く理解することは、自己成長、キャリア開発、パーソナルリレーションシップの向上に役立ちます。
              <br />
              <br />
              16タイプ診断を受けることで、自分の行動、モチベーション、可能性の理解を深めることができます。
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: 'rgba(115, 131, 160, 0.2)',
            padding: '1rem',
            width: '100%',
            mb: 1,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="rgb(115, 131, 160)"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.2rem' },
              fontWeight: 'bold',
            }}
          >
            🎤 最近テストを受験した人の声
          </Typography>
        </Box>

        <Box
          id="testimonials"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            width: '100%',
            mb: 2,
          }}
        >
          {/* 1st pair */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Box>
              <Image
                src="/sushi/INFJ.png"
                alt="sushi"
                placeholder="blur"
                blurDataURL={blurSushi}
                width={100}
                height={100}
              />
            </Box>
            <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                「私自身をより深く理解するのに役立ちました。」
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                🍣 ハマチ型 - 20代男性
              </Typography>
            </Box>
          </Box>

          {/* 2nd pair */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Box>
              <Image
                src="/sushi/ENFP.png"
                alt="sushi"
                placeholder="blur"
                blurDataURL={blurSushi}
                width={100}
                height={100}
              />
            </Box>
            <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                「私の個性と適性を理解するのにとても役立ちました。」
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                🍣 エビ型 - 30代女性
              </Typography>
            </Box>
          </Box>

          {/* 3rd pair */}
          <Box sx={{ display: 'flex', mb: 2 }}>
            <Box>
              <Image
                src="/sushi/ENTJ.png" // Change to appropriate image
                alt="sushi"
                placeholder="blur"
                blurDataURL={blurSushi} // Change to appropriate blurData
                width={100}
                height={100}
              />
            </Box>
            <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                「私の強みと弱みを把握し、改善するための新たな視点を得ることができました。」
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', mt: 1 }}>
                🍣 ウニ型 - 40代男性
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 'auto',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgb(89, 118, 138)',
            '&:hover': {
              backgroundColor: 'rgb(89, 118, 138)',
            },
            '&:active': {
              backgroundColor: 'rgb(89, 118, 138)',
            },
          }}
          onClick={handleStartTest}
        >
          診断スタート
        </Button>
      </Box>
    </>
  );
}

export default IndexPage;
