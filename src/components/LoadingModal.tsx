import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
} from '@mui/material';

interface LoadingModalProps {
  open: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ open }) => {
  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <DialogContent
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="primary" />
        <br />
        <Typography color="white" fontWeight="bold">
          読み込み中...少々お待ちください。
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
