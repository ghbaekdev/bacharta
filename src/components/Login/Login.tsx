import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { useRecoilState } from 'recoil';
import { KakaoProfile, KakaoToken, LoadingState } from '../../store/store';
import Loading from '../Loading/Loading';
import { getToken } from '../../api/apis';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const [profile, setProfile] = useRecoilState(KakaoProfile);
  const [token, setToken] = useRecoilState(KakaoToken);
  const [test, setTest] = useState({});
  const [loading, setLoading] = useRecoilState(LoadingState);

  const data = qs.stringify({
    grant_type: `authorization_code`,
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: KAKAO_CODE,
    client_secret: CLIENT_SECRET,
  });

  const kakaoToken = localStorage.getItem('access_token');

  const getKakaoToken = async () => {
    setLoading(!loading);
    await getToken(data)
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem('access_token', res.data.access_token);
          navigate(`/login?code=${KAKAO_CODE}`);
          setToken(res.data.access_token);
        }
      })
      .catch((err) => console.log(err));

    await axios
      .get('http://192.168.0.6:3000/user/sign', {
        headers: {
          Authorization: kakaoToken || '',
        },
      })
      .then((res) => console.log(res.data));
    setLoading(!loading);
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div>{loading && <Loading />}로그인됨</div>;
};

export default Login;
