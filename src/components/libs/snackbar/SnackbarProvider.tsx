import * as React from 'react';
import { AlertColor } from '@mui/material';
import { GlobalSnackbar } from './GlobalSnackbar';

/** SnackbarContext コンテキストオブジェクトの型 */
export type SnackbarContextType = {
  message: string;

  /** Snackbar の色 */
  severity: AlertColor;

  showSnackbar: (message: string, severity: AlertColor) => void;
};

export const SnackbarContext = React.createContext<SnackbarContextType>({
  message: '',
  severity: 'error',

  showSnackbar: (_message: string, _severity: AlertColor) => {},
});

export const SnackbarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const context: SnackbarContextType = React.useContext(SnackbarContext);
  const [message, setMessage] = React.useState(context.message);
  const [severity, setSeverity] = React.useState(context.severity);

  // コンテクストオブジェクトに自分自身の値を変更する関数をセットする
  const newContext: SnackbarContextType = React.useMemo(
    () => ({
      message,
      severity,
      showSnackbar: (message: string, severity: AlertColor) => {
        setMessage(message);
        setSeverity(severity);
      },
    }),
    [message, severity, setMessage, setSeverity]
  );

  // スナックバーを閉じるためのハンドラー関数
  const handleClose = React.useCallback(() => {
    setMessage('');
  }, [setMessage]);

  return (
    <SnackbarContext.Provider value={newContext}>
      {children}
      <GlobalSnackbar
        open={newContext.message !== ''}
        message={newContext.message}
        severity={newContext.severity}
        onClose={handleClose}
      />
    </SnackbarContext.Provider>
  );
};

/** SnackbarContext を簡単に使うためのユーティリティ関数 */
export function useSnackbar(): SnackbarContextType {
  return React.useContext(SnackbarContext);
}
