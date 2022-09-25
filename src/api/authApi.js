import axios from 'axios';

const kakaoToken = localStorage.getItem('access_token');

// const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

// const LOGOUT_REDIRECT_URI = process.env.REACT_APP_LOGOUT_REDIRECT_URI;

export const authInstance = axios.create({
  baseURL: 'https://kapi.kakao.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${kakaoToken}`,
  },
});

export const instance = axios.create({
  baseURL: 'https://kauth.kakao.com/oauth',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
