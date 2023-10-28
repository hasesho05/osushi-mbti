import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';

import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { SnackbarContextProvider } from '../components/libs/snackbar/SnackbarProvider';
import Layout from '../Layouts/Layout';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5578799155633840"
        crossOrigin="anonymous"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RJQ0HP99YH"
      ></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RJQ0HP99YH');`,
        }}
      ></script>
      <DefaultSeo
        title="おすし性格診断"
        description="ゆる〜く当たるお寿司に例える性格診断"
        openGraph={{
          type: 'website',
          title: 'おすし性格診断',
          description: 'ゆる〜く当たるお寿司に例える性格診断',
          images: [
            {
              url: 'https://osushi.life/ogp.PNG',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
