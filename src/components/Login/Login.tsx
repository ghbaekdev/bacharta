<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useRecoilState } from "recoil";
import { KakaoProfile, KakaoToken, LoadingState } from "../../store/store";
import Loading from "../Loading/Loading";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
=======
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { useRecoilState } from 'recoil';
import { KakaoToken, LoadingState } from '../../store/store';

const Login = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];
>>>>>>> c3411096196551b569a9aa99d4542761f8f88bbe
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  // const [profile, setProfile] = useRecoilState(KakaoProfile);
  const [token, setToken] = useRecoilState(KakaoToken);
  const [loading, setLoading] = useRecoilState(LoadingState);

  const data = qs.stringify({
    grant_type: `authorization_code`,
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: KAKAO_CODE,
    client_secret: CLIENT_SECRET,
  });

  const kakaoToken = localStorage.getItem("access_token");

  const getKakaoToken = async () => {
    await axios
      .post("https://kauth.kakao.com/oauth/token", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        if (res.data.access_token) {
<<<<<<< HEAD
          localStorage.setItem("access_token", res.data.access_token);
          navigate(`/login?code=${KAKAO_CODE}`);
=======
          localStorage.setItem('access_token', res.data.access_token);
>>>>>>> c3411096196551b569a9aa99d4542761f8f88bbe
          setToken(res.data.access_token);
        }
      })
      .catch((err) => console.log(err));
<<<<<<< HEAD

    await axios
      .get("http://192.168.0.6:3000/user/sign", {
        headers: {
          Authorization: kakaoToken || "",
        },
      })
      .then((res) => console.log(res.data));
    setLoading(!loading);
=======
    // await axios
    //   .get('http://192.168.0.6:3000/user/sign', {
    //     headers: {
    //       Authorization: kakaoToken || '',
    //     },
    //   })
    //   .then((res) => console.log(res.data));
>>>>>>> c3411096196551b569a9aa99d4542761f8f88bbe
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <></>;
};

export default Login;
