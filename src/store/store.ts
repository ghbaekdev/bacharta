import { atom } from "recoil";
export const KakaoToken = atom({
  key: "KakaoToken",
  default: "",
});

export const KakaoProfile = atom({
  key: "Profile",
  default: {},
});

export const LoadingState = atom({
  key: "loading",
  default: true,
});
