import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Modal,
  Paper,
  Avatar,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import useInterval from 'use-interval';

type Props = {
  type: string;
  personality: string;
};

export const PraiseModal: React.FC<Props> = ({ type, personality }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setResponse(null);
    setLoading(false);
  };

  const handleSubmit = async () => {
    if (!name || !experience) {
      alert('全ての項目を入力してください。');
    } else {
      setLoading(true);
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: [
            {
              role: 'system',
              content: `次のユーザーを、性格と経験を中心に優しく褒めてください。`,
            },
            {
              role: 'user',
              content: `名前は${name}です。性格は${type}型(${personality})です。最近こんなことを経験しました。${experience}`,
            },
          ],
        }),
      });

      const data = await res.json();

      if (data.result) {
        setResponse(data.result.content);
      } else {
        alert('An error occurred, please try again');
      }

      setLoading(false);
    }
  };

  useInterval(
    () => {
      setTextIndex((i) => i + 1);
    },
    response && textIndex < response.length ? 100 : null
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const body = response ? (
    <Paper
      sx={{
        position: 'absolute',
        width: isMobile ? '90%' : '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        maxHeight: '600px',
        zIndex: 1000,
      }}
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{ position: 'absolute', right: 15, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Avatar sx={{ bgcolor: 'gray', mx: 'auto' }}>
        <SmartToyIcon />
      </Avatar>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          whiteSpace: 'pre-line',
          overflow: 'auto',
          maxHeight: '500px',
        }}
      >
        {response.slice(0, textIndex).replace(/。/g, '。\n')}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          bgcolor: 'rgb(89, 118, 138)',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
        }}
        onClick={handleClose}
      >
        閉じる
      </Button>
    </Paper>
  ) : (
    <Paper
      sx={{
        position: 'absolute',
        width: isMobile ? '90%' : '50%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Avatar sx={{ bgcolor: 'gray', mx: 'auto' }}>
        <SmartToyIcon />
      </Avatar>
      {!response && (
        <Typography fontWeight="bold" sx={{ mx: 'auto' }}>
          AIがあなたのことを全力で褒めます
        </Typography>
      )}
      <IconButton
        edge="end"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        sx={{ position: 'absolute', right: 15, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="名前"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        margin="dense"
        id="experience"
        label="最近なにかありましたか？"
        placeholder="がんばったこと、辛かったことなど"
        multiline
        rows={4}
        value={experience}
        onChange={(event) => setExperience(event.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          bgcolor: 'rgb(89, 118, 138)',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
          ':hover': {
            bgcolor: 'rgb(89, 118, 138)',
            color: 'white',
          },
          ':active': {
            bgcolor: 'rgb(89, 118, 138)',
            color: 'white',
          },
        }}
        onClick={handleSubmit}
      >
        {loading ? 'AIがあなたを学習中...少々お待ちください。' : '送信'}
      </Button>
      <>{loading && <CircularProgress sx={{ color: 'gray', mx: 'auto' }} />}</>
    </Paper>
  );

  return (
    <>
      <Tooltip title="AIに褒めてもらう">
        <Button
          variant="contained"
          sx={{
            bgcolor: 'grey',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: '65px',
            height: '65px',
            minWidth: '65px',
            minHeight: '65px',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'grey',
            },
            '&:active': {
              bgcolor: 'grey',
            },
          }}
          onClick={handleClickOpen}
        >
          <SmartToyIcon sx={{ fontSize: '2rem' }} />
        </Button>
      </Tooltip>

      <Modal open={open} onClose={handleClose} sx={{ display: 'flex' }}>
        {body}
      </Modal>
    </>
  );
};
