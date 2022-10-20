import React, { useEffect } from "react";
import styled from "styled-components";
import OutfitsModal from "./components/OutfitsModal";
import { useRecoilState } from "recoil";
import { KakaoToken } from "../../store/store";
const Outfits = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const [token] = useRecoilState(KakaoToken);

  useEffect(() => {
    if (!token) {
      window.location.href = KAKAO_AUTH_URL;
    }
  }, []);
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
