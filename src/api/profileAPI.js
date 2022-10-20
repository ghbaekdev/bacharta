import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kapi.kakao.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const getProfile = async (token) => {
  const response = await instance.get('/v2/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
