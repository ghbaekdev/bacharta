import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OutfitsModal from "./components/OutfitsModal";
const Outfits = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_ token");
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  // useEffect(() => {
  //   if (!accessToken) {
  //     // window.location.href = KAKAO_AUTH_URL;
  //     alert("로그인이 필요합니다.");
  //     navigate("/");
  //   }
  // }, []);
  return (
    <OutfitsWrapper>
      <OutfitsSection>
        <OutfitsModal></OutfitsModal>
      </OutfitsSection>
    </OutfitsWrapper>
  );
};
const OutfitsWrapper = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;

const OutfitsSection = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  width: 1080px;
`;

export default Outfits;
