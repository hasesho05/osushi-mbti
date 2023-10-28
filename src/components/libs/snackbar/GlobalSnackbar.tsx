import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/system';

/** スナックバーの表示をカスタマイズ */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledSnackbar = styled(Snackbar)({
  width: '350px',
  position: 'fixed',
  bottom: '80px',
  left: 0,
});

type Props = {
  /** スナックバーを表示するか */
  open: boolean;

  /** スナックバーに表示するメッセージ */
  message: string;

  /** スナックバーの色 (error | warning | info | success) */
  severity?: AlertColor;

  /** スナックバーを閉じるべきタイミングで呼び出されます */
  onClose?: () => void;
};

/** スナックバーを表示するコンポーネント */
export const GlobalSnackbar: React.FC<Props> = ({
  open,
  message,
  severity = 'info',
  onClose,
}) => {
  return (
    <StyledSnackbar open={open} onClose={onClose} autoHideDuration={6000}>
      <Alert
        severity={severity}
        sx={{ bgcolor: 'white', color: 'black', border: '2px solid gray' }}
      >
        {message}
      </Alert>
    </StyledSnackbar>
  );
};

// SnackbarProvider.tsx remains the same.
