import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { NextSeo } from 'next-seo';
import { Testimonial, testimonials } from '../data/testimonial';
import { useRouter } from 'next/router';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card sx={{ width: '100%', height: { xs: '340px', sm: '370px' }, mb: 2 }}>
      <CardContent
        sx={{
          width: '100%',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'rgba(115, 131, 160, 0.2)',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ mx: 'auto', fontSize: '1rem', fontWeight: 'bold' }}
        >
          {testimonial.title} ({testimonial.type})
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            mt: 1,
            mb: 2,
          }}
        >
          <Avatar
            src={testimonial.image}
            alt={testimonial.type}
            sx={{
              mx: 'auto',
              p: 1,
              bgcolor: 'white',
              width: '120px',
              height: '120px',
            }}
          />
        </Box>
        <Box sx={{ height: '100%', mt: '50px' }}>
          <Typography variant="body2" color="text.secondary">
            {testimonial.testimonial}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

function TestimonialPage() {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="当サイトの推薦の声"
        description="当サイトの推薦の声についての情報です。"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '800px',
          mx: 'auto',
        }}
      >
        <Typography
          sx={{
            mr: 'auto',
            ml: '10px',
            my: 2,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderBottom: '2px solid lightgray',
          }}
        >
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <Grid item xs={12} sm={4} key={index}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            mx: 'auto',
            mt: 3,
            borderRadius: '15px',
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgb(89, 118, 138)',
            '&:hover': {
              backgroundColor: 'rgb(89, 118, 138)',
            },
          }}
          onClick={() => router.push('/test')}
        >
          性格診断してみる
        </Button>
      </Box>
    </>
  );
}

export default TestimonialPage;
