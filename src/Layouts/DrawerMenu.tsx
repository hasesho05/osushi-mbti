import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';
import { DrawerProps } from '@mui/material';
import { useRouter } from 'next/router';

const DrawerMenu: React.FC<DrawerProps> = ({ open, onClose }) => {
  const router = useRouter();
  const [personality, setPersonality] = useState<string | null>(null);
  const [docId, setDocId] = useState<string | null>(null);
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    setPersonality(localStorage.getItem('personality'));
    setDocId(localStorage.getItem('docId'));
    setIcon(localStorage.getItem('icon'));
  }, []);

  const handleTestButtonClick = () => {
    router.push('/test/');
  };

  const handlePreviousResultClick = () => {
    if (docId) router.push(`/result/${docId}`);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 250,
          height: '100%',
          bgcolor: 'background.paper',
        }}
        role="presentation"
        onClick={onClose as any}
        onKeyDown={onClose as any}
      >
        <Box
          sx={{
            transform: 'rotate(45deg)',
            backgroundColor: 'rgb(246, 246, 247)',
            margin: 1,
            position: 'absolute',
            top: -13,
            right: -13,
            padding: 3,
            cursor: 'pointer',
          }}
          onClick={onClose as any}
        ></Box>
        <CloseIcon
          sx={{
            top: 0,
            right: 0,
            margin: 1,
            position: 'absolute',
            cursor: 'pointer',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 3,
          }}
        >
          <Avatar
            src={icon ? icon : ''}
            sx={{
              my: 4,
              width: '6rem',
              height: '6rem',
              bgcolor: 'rgb(246, 246, 247)',
            }}
          />
          {personality && docId && (
            <Button
              variant="contained"
              onClick={handlePreviousResultClick}
              sx={{
                mb: 2,
                width: '80%',
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
            >
              前回の結果
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleTestButtonClick}
            sx={{
              width: '80%',
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
          >
            テストを受ける
          </Button>
        </Box>

        <Divider />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            py: 3,
            px: 2,
            width: '100%',
          }}
        >
          <Link
            href="/personalities"
            sx={{
              width: '100%',
              display: 'block',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgb(246, 246, 247)',
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color="rgb(81, 89, 106)"
            >
              性格タイプ
            </Typography>
          </Link>
          <Link
            href="/columns/page/1"
            sx={{
              width: '100%',
              display: 'block',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgb(246, 246, 247)',
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color="rgb(81, 89, 106)"
            >
              コラム
            </Typography>
          </Link>
          <Link
            href="/privacy"
            sx={{
              width: '100%',
              display: 'block',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgb(246, 246, 247)',
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color="rgb(81, 89, 106)"
            >
              プライバシーポリシー
            </Typography>
          </Link>
          <Link
            href="/contact"
            sx={{
              width: '100%',
              display: 'block',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgb(246, 246, 247)',
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color="rgb(81, 89, 106)"
            >
              お問い合わせ
            </Typography>
          </Link>
          <Link
            href="https://note.com/marunoco/n/nf93085291c54"
            sx={{
              width: '100%',
              display: 'block',
              p: 1,
              borderRadius: 1,
              '&:hover': {
                backgroundColor: 'rgb(246, 246, 247)',
              },
            }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              color="rgb(81, 89, 106)"
            >
              診断アプリの作り方
            </Typography>
          </Link>
        </Box>

        <Divider />
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
