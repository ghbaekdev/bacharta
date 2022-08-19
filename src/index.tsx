import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
<<<<<<< HEAD
import { GlobalStyle } from './styles/global-style';
=======
import { GlobalStyle } from './styles/global-styles';
>>>>>>> 9f3605f (초기세팅)
import theme from './styles/theme';
import Router from './Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
