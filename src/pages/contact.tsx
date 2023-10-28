import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { saveContact } from '../firebase';

import { NextSeo } from 'next-seo';

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      await saveContact(data.name, data.email, data.message);
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <>
      <NextSeo
        title="お問い合わせ"
        description="当サイトのお問い合わせページです。"
      />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography
            fontWeight="bold"
            variant="h5"
            component="h1"
            gutterBottom
          >
            お問い合わせ
          </Typography>
          {submitted ? (
            <Typography variant="body1">
              Thanks for your message. We will get back to you shortly.
            </Typography>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('name', { required: true })}
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name && 'Name is required.'}
              />
              <TextField
                {...register('email', { required: true })}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email && 'Email is required.'}
              />
              <TextField
                {...register('message', { required: true })}
                label="Message"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                error={!!errors.message}
                helperText={errors.message && 'Message is required.'}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
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
                送信
              </Button>
            </form>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Contact;
