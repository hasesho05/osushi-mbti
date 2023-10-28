import React from 'react';
import { FormControl, Box, Grid, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import { Question } from '../data/questions';
import {
  LargeCircleBox,
  MediumCircleBox,
  SmallCircleBox,
} from '../components/CircleBox';

type QuestionProps = {
  question: Question;
  answers: { [id: number]: number | undefined };
  handleBoxClick: (questionId: number, answer: number) => void;
};

const Questions: React.FC<QuestionProps> = ({
  question,
  answers,
  handleBoxClick,
}) => {
  return (
    <Box
      key={question.id}
      marginBottom={10}
      sx={{ width: { xs: '100%', sm: '500px' }, mx: 'auto' }}
      id={`questionBox-${question.id}`}
    >
      <FormControl sx={{ width: '100%', gap: 1 }}>
        <Typography sx={{ color: '#50514F', fontWeight: 'bold' }}>
          Q, {question.text}
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
        >
          <Grid item xs>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                transform: 'translateY(10px)',
              }}
            >
              <LargeCircleBox
                sx={{
                  border: '3px solid rgb(89, 118, 138)',
                  '&:hover': { backgroundColor: 'rgb(89, 118, 138)' },
                  '&.selected': {
                    backgroundColor: 'rgb(89, 118, 138)',
                  },
                }}
                className={answers[question.id] === 7 ? 'selected' : ''}
                onClick={() => handleBoxClick(question.id, 7)}
              >
                {answers[question.id] === 7 && (
                  <CheckIcon sx={{ color: 'white' }} />
                )}
              </LargeCircleBox>
              <Typography
                sx={{
                  color: 'rgb(89, 118, 138)',
                  fontWeight: 'bold',
                  mt: 1,
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                }}
              >
                同意する
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MediumCircleBox
                sx={{
                  border: '3px solid rgb(89, 118, 138)',
                  '&:hover': { backgroundColor: 'rgb(89, 118, 138)' },
                  '&.selected': {
                    backgroundColor: 'rgb(89, 118, 138)',
                  },
                }}
                className={answers[question.id] === 5 ? 'selected' : ''}
                onClick={() => handleBoxClick(question.id, 5)}
              >
                {answers[question.id] === 5 && (
                  <CheckIcon sx={{ color: 'white' }} />
                )}
              </MediumCircleBox>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SmallCircleBox
                sx={{
                  border: '3px solid #50514F',
                  '&:hover': { backgroundColor: '#50514F' },
                  '&.selected': {
                    backgroundColor: '#50514F',
                  },
                }}
                className={answers[question.id] === 4 ? 'selected' : ''}
                onClick={() => handleBoxClick(question.id, 4)}
              >
                {answers[question.id] === 4 && (
                  <CheckIcon sx={{ color: 'white' }} />
                )}
              </SmallCircleBox>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MediumCircleBox
                sx={{
                  border: '3px solid #FF6B6B',
                  '&:hover': { backgroundColor: '#FF6B6B' },
                  '&.selected': {
                    backgroundColor: '#FF6B6B',
                  },
                }}
                className={answers[question.id] === 3 ? 'selected' : ''}
                onClick={() => handleBoxClick(question.id, 3)}
              >
                {answers[question.id] === 3 && (
                  <CheckIcon sx={{ color: 'white' }} />
                )}
              </MediumCircleBox>
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateY(10px)',
              }}
            >
              <LargeCircleBox
                sx={{
                  border: '3px solid #FF6B6B',
                  '&:hover': { backgroundColor: '#FF6B6B' },
                  '&.selected': {
                    backgroundColor: '#FF6B6B',
                  },
                }}
                className={answers[question.id] === 1 ? 'selected' : ''}
                onClick={() => handleBoxClick(question.id, 1)}
              >
                {answers[question.id] === 1 && (
                  <CheckIcon sx={{ color: 'white' }} />
                )}
              </LargeCircleBox>
              <Typography
                sx={{
                  color: '#FF6B6B',
                  fontWeight: 'bold',
                  mt: 1,
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                }}
              >
                同意しない
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default Questions;
