<<<<<<< HEAD
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useRecoilState } from "recoil";
import { KakaoToken, LoadingState } from "../../store/store";
=======
import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { getKakaoToken } from '../../api/authAPI';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { KakaoToken } from '../../store/store';
>>>>>>> ebabbbe6ea912aafaaed6ee7cc1c3d22a31f1340

const Login = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const [token, setToken] = useRecoilState(KakaoToken);

  const postData = qs.stringify({
    grant_type: `authorization_code`,
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: KAKAO_CODE,
    client_secret: CLIENT_SECRET,
  });

<<<<<<< HEAD
  const kakaoToken = localStorage.getItem("access_token");

  const getKakaoToken = async () => {
    await axios
      .post("https://kauth.kakao.com/oauth/token", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("access_token", res.data.access_token);
          setToken(res.data.access_token);
        }
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://192.168.0.6:3000/user/sign", {
        headers: {
          Authorization: kakaoToken || "",
        },
      })
      .then((res) => console.log(res.data));
    setLoading(!loading);
  };
=======
  // const getKakaoToken = async () => {
  //   await axios
  //     .post('https://kauth.kakao.com/oauth/token', data, {
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     })
  //     .then((res) => {
  //       if (res.data.access_token) {
  //         localStorage.setItem('access_token', res.data.access_token);
  //         setToken(res.data.access_token);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   // await axios
  //   //   .get('http://192.168.0.6:3000/user/sign', {
  //   //     headers: {
  //   //       Authorization: kakaoToken || '',
  //   //     },
  //   //   })
  //   //   .then((res) => console.log(res.data));
  // };

  const query = useQuery(
    ['getToken'],
    () =>
      getKakaoToken(postData).then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        setToken(res.data.access_token);
      }),
    {
      enabled: !!location.search,
      retry: false,
    }
  );
>>>>>>> ebabbbe6ea912aafaaed6ee7cc1c3d22a31f1340

  // console.log(postData);
  // useEffect(() => {
  //   if (!location.search) return;
  //   getKakaoToken(postData)
  //     .then((res) => {
  //       if (res.data.access_token) {
  //         localStorage.setItem('access_token', res.data.access_token);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return <></>;
};

export default Login;
