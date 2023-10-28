import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Box } from '@mui/material';

import { GlassBox } from '../components/GlassBox';
import { questions } from '../data/questions';

import Questions from '../components/Questions';
import { authenticateAnonymously, saveResults } from '../firebase';
import { useRouter } from 'next/router';
import LoadingModal from '../components/LoadingModal';

import { NextSeo } from 'next-seo';
import { useSnackbar } from '../components/libs/snackbar/SnackbarProvider';
import ProgressBar from '../components/ProgressBar';

function PersonalityTestPage() {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const topRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [typeScores, setTypeScores] = useState<{ [type: string]: number }>({
    energy: 0,
    information: 0,
    decision: 0,
    lifeStyle: 0,
  });

  const [answers, setAnswers] = useState<{ [id: number]: number | undefined }>(
    questions.reduce((prev, curr) => ({ ...prev, [curr.id]: undefined }), {})
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleBoxClick = useCallback(
    (questionId: number, value: number) => {
      const questionType = questions.find((q) => q.id === questionId)?.type;

      setAnswers((prev) => {
        // 現在の回答を取得し、それを該当するスコアから差し引く
        const currentAnswer = prev[questionId] || 0;
        if (questionType) {
          setTypeScores((prevTypeScores) => ({
            ...prevTypeScores,
            [questionType]: (prevTypeScores[questionType] || 0) - currentAnswer,
          }));
        }

        // 新しい回答を返す
        return { ...prev, [questionId]: value };
      });

      if (questionType) {
        // 新しい回答を該当するスコアに加算
        setTypeScores((prev) => ({
          ...prev,
          [questionType]: (prev[questionType] || 0) + value,
        }));
      }

      window.scrollTo({
        top: window.scrollY + 210,
        behavior: 'smooth',
      });
    },
    [questions, setAnswers, setTypeScores]
  );

  const epsilon = 0.0001;
  const answeredCount = Object.values(answers).filter(
    (val) => val !== undefined
  ).length;
  const progress = (answeredCount / questions.length + epsilon) * 100;

  const getCurrentQuestionsAndAnswers = () => {
    const currentQuestions = questions.slice(
      (currentPage - 1) * 8,
      currentPage * 8
    );

    const isAllAnswered = currentQuestions.every(
      (q) => answers[q.id] !== undefined
    );

    return { currentQuestions, isAllAnswered };
  };

  const handleNext = () => {
    const { isAllAnswered } = getCurrentQuestionsAndAnswers();

    if (isAllAnswered) {
      setCurrentPage((currentPage) => currentPage + 1);
    } else {
      showSnackbar('全ての質問に回答してください！', 'error');
    }
  };

  // スコアをもとにパーソナリティを計算
  const calculatePersonality = (typeScores: { [type: string]: number }) => {
    const personality = [
      typeScores.energy > 32.5 ? 'E' : 'I',
      typeScores.information > 32.5 ? 'S' : 'N',
      typeScores.decision > 32.5 ? 'T' : 'F',
      typeScores.lifeStyle > 32.5 ? 'J' : 'P',
    ].join('');

    return personality;
  };

  const handleSubmit = async () => {
    const { isAllAnswered } = getCurrentQuestionsAndAnswers();

    if (!isAllAnswered) {
      showSnackbar('全ての質問に回答してください！', 'error');
      return;
    }

    setLoading(true);
    const personality = calculatePersonality(typeScores);

    try {
      await authenticateAnonymously();
      const docId = await saveResults(personality, typeScores);
      localStorage.setItem('personality', personality);
      localStorage.setItem('docId', docId);
      router.push(`/result/${docId}`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
      <NextSeo
        title="性格診断ページ"
        description="質問に答えてあなたのパーソナリティタイプを診断しましょう！"
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,

          pb: 5,
          minHeight: '300px',
        }}
      >
        <Box
          id="top"
          ref={topRef}
          sx={{
            width: '100%',
            maxWidth: 600,
            minWidth: 340,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {currentPage === 1 && (
            <>
              <Box
                sx={{
                  my: 4,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  p: 0,
                  width: '80%',
                  gap: 1.5,
                }}
              >
                <GlassBox
                  imageSrc="/test/idea.gif"
                  altText="Description of gif 1"
                  description="リラックスして、悩まず
          に選択しましょう"
                  priority={true}
                />
                <GlassBox
                  imageSrc="/test/social-care.gif"
                  altText="Description of gif 2"
                  description="
          自然な自分の回答を選択しましょう"
                  priority={true}
                />
                <GlassBox
                  imageSrc="/test/save-money.gif"
                  altText="Description of gif 3"
                  description="
          はっきりとサクサク質問に答えましょう"
                  priority={true}
                />
              </Box>

              {questions.slice(0, 8).map((question) => (
                <Questions
                  key={question.id}
                  question={question}
                  answers={answers}
                  handleBoxClick={handleBoxClick}
                />
              ))}
            </>
          )}
          {currentPage === 2 && (
            <>
              <Box
                sx={{
                  my: 4,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  p: 0,
                  width: '90%',
                }}
              >
                <GlassBox
                  imageSrc="/test/rocket.gif"
                  altText="Description of gif 1"
                  description="良いペースで回答できています！"
                  lazy={true}
                />
              </Box>
              {questions.slice(8, 16).map((question) => (
                <Questions
                  key={question.id}
                  question={question}
                  answers={answers}
                  handleBoxClick={handleBoxClick}
                />
              ))}
            </>
          )}
          {currentPage === 3 && (
            <>
              <Box
                sx={{
                  my: 4,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  p: 0,
                  width: '90%',
                }}
              >
                <GlassBox
                  imageSrc="/test/social-care.gif"
                  altText="Description of gif 1"
                  description="リラックスして、悩まずに選択しましょう"
                  lazy={true}
                />
              </Box>
              {questions.slice(16, 24).map((question) => (
                <Questions
                  key={question.id}
                  question={question}
                  answers={answers}
                  handleBoxClick={handleBoxClick}
                />
              ))}
            </>
          )}
          {currentPage === 4 && (
            <>
              <Box
                sx={{
                  my: 4,
                  mx: 'auto',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-around',
                  p: 0,
                  width: '90%',
                }}
              >
                <GlassBox
                  imageSrc="/test/like.gif"
                  altText="Description of gif 1"
                  description="あと一息！もうすこしです。"
                  lazy={true}
                />
              </Box>
              {questions.slice(24, 32).map((question) => (
                <Questions
                  key={question.id}
                  question={question}
                  answers={answers}
                  handleBoxClick={handleBoxClick}
                />
              ))}
            </>
          )}

          <Button
            variant="contained"
            sx={{
              p: 1,
              mb: 2,
              borderRadius: '20px',
              width: '50%',
              bgcolor: 'rgb(89, 118, 138)',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: 'rgb(89, 118, 138)' },
            }}
            onClick={currentPage !== 4 ? handleNext : handleSubmit}
          >
            {currentPage !== 4 ? '次へ進む' : '結果を診断する'}
          </Button>
        </Box>
      </Box>
      <Box id="fixedElement">
        <ProgressBar progress={progress} />
      </Box>
      <LoadingModal open={loading} />
    </>
  );
}

export default PersonalityTestPage;
