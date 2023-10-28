import React, { MouseEvent } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Tooltip } from '@mui/material';

interface CopyLinkButtonProps extends ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({
  onClick,
  ...rest
}) => {
  return (
    <Tooltip title="リンクをコピーする">
      <Button
        variant="contained"
        sx={{
          bgcolor: 'rgb(89, 118, 138)',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '50px',
          height: '45px',
          px: 2,
          mt: 1.1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
          '&:hover': {
            bgcolor: 'rgb(89, 118, 138)',
          },
          '&:active': {
            bgcolor: 'rgb(89, 118, 138)',
          },
        }}
        startIcon={<ContentCopyIcon sx={{ fontSize: '2rem' }} />}
        onClick={onClick}
        {...rest}
      >
        リンクをコピーする
      </Button>
    </Tooltip>
  );
};

export default CopyLinkButton;
