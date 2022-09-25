import { authInstance, instance } from './authApi';
import axios from 'axios';

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const LOGOUT_REDIRECT_URI = process.env.REACT_APP_LOGOUT_REDIRECT_URI;

export const getKakaoProfile = async () => {
  const response = await authInstance.get('v2/user/me');
  return response;
};

export const kakaoUserLogout = async () => {
  await axios.get(
    `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`
  );
};

export const getToken = async (data) => {
  const response = await instance.post('/token', data);
  return response;
};
