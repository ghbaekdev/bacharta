import styled from "styled-components";
import unitedarab from "../assets/nation/unitedarab.png";
import austrailia from "../assets/nation/austrailia.png";
import bahrain from "../assets/nation/bahrain.png";
import brunei from "../assets/nation/brunei.png";
import canada from "../assets/nation/canada.png";
import switzland from "../assets/nation/switzland.png";
import china from "../assets/nation/china.png";
import denmark from "../assets/nation/denmark.png";
import EU from "../assets/nation/EU.png";
import england from "../assets/nation/england.png";
import hongkong from "../assets/nation/hongkong.png";
import indonesia from "../assets/nation/indonesia.png";
import japan from "../assets/nation/japan.png";
import korea from "../assets/nation/korea.png";
import kuwait from "../assets/nation/kuwait.png";
import malaysia from "../assets/nation/malaysia.png";
import norway from "../assets/nation/norway.png";
import newzealand from "../assets/nation/newzealand.png";
import saudi from "../assets/nation/saudi.png";
import sweden from "../assets/nation/sweden.png";
import singapore from "../assets/nation/singapore.png";
import thailand from "../assets/nation/thailand.png";
import usa from "../assets/nation/usa.png";

const Images = styled.img`
  width: 30px;
  height: 30px;
`;
export const NATION_FLAG = [
  {
    id: 1,
    name: "아랍에메리트",
    flag_url: <Images src={unitedarab} />,
  },
  {
    id: 2,
    name: "호주",
    flag_url: <Images src={austrailia} />,
  },
  {
    id: 3,
    name: "바레인",
    flag_url: <Images src={bahrain} />,
  },
  {
    id: 4,
    name: "브루나이",
    flag_url: <Images src={brunei} />,
  },
  {
    id: 5,
    name: "캐나다",
    flag_url: <Images src={canada} />,
  },
  {
    id: 6,
    name: "스위스",
    flag_url: <Images src={switzland} />,
  },
  {
    id: 7,
    name: "중국",
    flag_url: <Images src={china} />,
  },
  {
    id: 8,
    name: "덴마크",
    flag_url: <Images src={denmark} />,
  },
  {
    id: 9,
    name: "유로",
    flag_url: <Images src={EU} />,
  },
  {
    id: 10,
    name: "영국",
    flag_url: <Images src={england} />,
  },
  {
    id: 11,
    name: "홍콩",
    flag_url: <Images src={hongkong} />,
  },
  {
    id: 12,
    name: "인도네시아",
    flag_url: <Images src={indonesia} />,
  },
  {
    id: 13,
    name: "일본",
    flag_url: <Images src={japan} />,
  },
  {
    id: 14,
    name: "한국",
    flag_url: <Images src={korea} />,
  },
  {
    id: 15,
    name: "쿠웨이트",
    flag_url: <Images src={kuwait} />,
  },
  {
    id: 16,
    name: "말레이시아",
    flag_url: <Images src={malaysia} />,
  },
  {
    id: 17,
    name: "노르웨이",
    flag_url: <Images src={norway} />,
  },
  {
    id: 18,
    name: "뉴질랜드",
    flag_url: <Images src={newzealand} />,
  },
  {
    id: 19,
    name: "사우디 아라비아",
    flag_url: <Images src={saudi} />,
  },
  {
    id: 20,
    name: "스웨덴",
    flag_url: <Images src={sweden} />,
  },
  {
    id: 21,
    name: "싱가폴",
    flag_url: <Images src={singapore} />,
  },
  {
    id: 22,
    name: "태국",
    flag_url: <Images src={thailand} />,
  },
  {
    id: 23,
    name: "미국",
    flag_url: <Images src={usa} />,
  },
];

export default NATION_FLAG;
