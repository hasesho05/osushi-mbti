import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { PERSONALITY_RESULTS } from '../../data/data';
import BarChart from '../../components/BarChart';
import RadarChart from '../../components/RaderChart';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { PraiseModal } from '../../components/PraiseModal';
import { CompatibleType } from '../../data/types';
import {
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { useSnackbar } from '../../components/libs/snackbar/SnackbarProvider';
import CopyLinkButton from '../../components/CopyLinkButton';
import { blurSushi, convertToSushi } from '../../utils/util';

type ResultProps = {
  personality: keyof typeof PERSONALITY_RESULTS;
  sushi: string;
  scores: {
    energy: number;
    decision: number;
    information: number;
    lifeStyle: number;
  };
  ogImageUrl: string;
};

const Result = ({ personality, sushi, scores, ogImageUrl }: ResultProps) => {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const { userId } = router.query;
  const result = PERSONALITY_RESULTS[personality];
  const [isVisiblePersonality, setIsVisiblePersonality] = useState(false);
  const [isVisibleCompatibleType, setIsVisibleCompatibleType] = useState(false);
  const [isVisibleStrengthsAndWeaknesses, setIsVisibleStrengthsAndWeaknesses] =
    useState(false);
  const [isVisibleRomantic, setIsVisibleRomantic] = useState(false);
  const toggleVisibilityPersonality = () =>
    setIsVisiblePersonality(!isVisiblePersonality);
  const toggleVisibilityCompatibleType = () =>
    setIsVisibleCompatibleType(!isVisibleCompatibleType);
  const toggleVisibilityStrengthsAndWeaknesses = () =>
    setIsVisibleStrengthsAndWeaknesses(!isVisibleStrengthsAndWeaknesses);
  const toggleVisibilityRomantic = () =>
    setIsVisibleRomantic(!isVisibleRomantic);

  const [energy, setEnergy] = useState(0);
  const [information, setInformation] = useState(0);
  const [decision, setDecision] = useState(0);
  const [lifeStyle, setLifeStyle] = useState(0);

  function copyTextToClipboard() {
    navigator.clipboard.writeText(`https://osushi.life/share/${userId}`);
    showSnackbar('リンクをコピーしました！', 'success');
  }

  useEffect(() => {
    setEnergy(scores.energy);
    setInformation(scores.information);
    setDecision(scores.decision);
    setLifeStyle(scores.lifeStyle);

    localStorage.setItem('icon', result.image);
  }, []);

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'ja_JP',
          url: `https://osushi.life/result/${userId}`,
          title: `あなたの性格タイプは${sushi}型(${personality})です`,
          description: `診断結果の詳細を見てみましょう！`,
          images: [
            {
              url: ogImageUrl,
              width: 800,
              height: 600,
              alt: 'Personality Test Result',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <>
        <Box sx={{}}>
          <Box
            sx={{
              pt: 2,
              width: '100vw',

              bgcolor: '#fffcf2',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },

              pb: '20px',
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                color="rgb(96, 96, 96)"
                fontWeight="bold"
                gutterBottom
              >
                あなたの性格タイプ
              </Typography>
              <Typography
                color="rgb(96, 96, 96)"
                fontWeight="bold"
                gutterBottom
              ></Typography>
              <Box display="flex">
                <Typography
                  color="rgb(242, 94, 98)"
                  variant="h4"
                  fontFamily="Hiragino Mincho ProN"
                  fontWeight="bold"
                  gutterBottom
                >
                  {result.type}
                </Typography>

                <Typography
                  color="rgb(242, 94, 98)"
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: '1rem', mt: 1.2 }}
                  fontFamily="Hiragino Mincho ProN"
                >
                  ({result.title})
                </Typography>
              </Box>
              <motion.div
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Image
                  src={result.image}
                  alt={result.title}
                  placeholder="blur"
                  blurDataURL={blurSushi}
                  width={240}
                  height={240}
                />
              </motion.div>
            </Box>
          </Box>

          <Box sx={{ mx: 'auto', maxWidth: '800px' }}>
            <>
              <br />
              <Accordion
                expanded={isVisiblePersonality}
                onChange={toggleVisibilityPersonality}
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary
                  expandIcon={
                    <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />
                  }
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ fontSize: '1.4rem' }}
                  >
                    🍣 基本的性格
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Box
                    sx={{
                      mx: 'auto',
                      mb: 5,
                      p: 1,
                      gap: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}
                  >
                    <BarChart
                      leftLabel="内向型"
                      rightLabel="外向型"
                      energyScore={energy}
                      color={'#247BA0'}
                    />
                    <BarChart
                      leftLabel="直感型"
                      rightLabel="現実型"
                      energyScore={information}
                      color={'#DDC258'}
                    />
                    <BarChart
                      leftLabel="道理型"
                      rightLabel="論理型"
                      energyScore={decision}
                      color={'#70C1B3'}
                    />
                    <BarChart
                      leftLabel="探索型"
                      rightLabel="計画型"
                      energyScore={lifeStyle}
                      color={'#F25F5C'}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: result.basicPersonality,
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            </>
            <br />
            <Accordion
              expanded={isVisibleCompatibleType}
              onChange={toggleVisibilityCompatibleType}
              sx={{ boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontSize: '1.4rem' }}
                >
                  🐟 相性の良いタイプ
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {result.compatibleType.map(
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
                          <Typography
                            sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                          >
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
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion
              expanded={isVisibleStrengthsAndWeaknesses}
              onChange={toggleVisibilityStrengthsAndWeaknesses}
              sx={{ boxShadow: 'none', mt: 0 }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontSize: '1.4rem' }}
                >
                  🐡 長所と短所
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <RadarChart scores={scores} />
                <Box
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: result.strengthsAndWeaknesses,
                  }}
                />
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion
              expanded={isVisibleRomantic}
              onChange={toggleVisibilityRomantic}
              sx={{ boxShadow: 'none' }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontSize: '1.4rem' }}
                >
                  🐠 恋愛について
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: result.romanticRelationships,
                  }}
                />
              </AccordionDetails>
            </Accordion>
            <Divider />

            <Box
              sx={{
                mt: 5,
                bgcolor: 'rgba(242, 163, 132, 0.2)',
                minHeight: '300px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  color: 'rgb(242, 163, 132)',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                🤖 AIに褒めてもらう
              </Typography>

              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1rem',
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                自分自身のことを理解したら、さらに具体的な出来事を通じてあなたの良いところを自覚しましょう！
                <br /> <br />
                優しいAIがなんでも聞いてくれます。
              </Typography>

              <PraiseModal type={result.type} personality={personality} />
            </Box>
            <Box
              sx={{
                mt: 5,
                bgcolor: 'rgba(230, 230, 230, 0.4)',
                minHeight: '300px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                🍣 SNSにシェアしてみましょう！
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px',
                  height: { xs: '180px', sm: '200px' },
                  mx: 'auto',
                }}
              >
                <Image
                  src={`/ogp/${personality}.png`}
                  alt={result.title}
                  placeholder="blur"
                  blurDataURL={blurSushi}
                  fill
                />
              </Box>
              <Typography
                sx={{
                  color: 'black',
                  fontSize: '1rem',
                  textAlign: 'center',
                  my: 2,
                }}
              >
                リンクをコピーしてSNSに投稿すると、上記のような画像が表示されます！
                <br />
                家族やお友達と診断結果を共有してみましょう。
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100vw',
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            bgcolor: 'rgba(0,0,0,0.1)',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <CopyLinkButton onClick={copyTextToClipboard} />

          <TwitterShareButton
            url={`https://www.osushi.life/share/${userId} \n\n`}
            title={`あなたの性格タイプは${result.type}型(${result.title})でした！🍣 \n`}
            hashtags={[
              'おすし性格診断',
              '16PersonalityTest',
              'MBTI',
              '相性診断',
            ]}
          >
            <TwitterIcon round style={{ width: '50px' }} />
          </TwitterShareButton>

          <LineShareButton
            url={`https://www.osushi.life/share/${userId}`}
            title={`あなたの性格タイプは${result.type}(${result.title})でした！🍣`}
          >
            <LineIcon round style={{ width: '50px' }} />
          </LineShareButton>
        </Box>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.userId;

  if (typeof userId !== 'string') {
    return {
      notFound: true,
    };
  }

  const docRef = doc(db, 'results', userId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }

  const data = docSnap.data();
  const personality = data?.personality as keyof typeof PERSONALITY_RESULTS; // 型を明示的に指定
  const sushi = convertToSushi(personality);
  const scores = data?.typeScores;
  const ogImageUrl = `https://osushi.life/ogp/${personality}.png`;

  return {
    props: { personality, sushi, scores, ogImageUrl },
  };
};

export default Result;
