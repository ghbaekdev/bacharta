import React from "react";
import styled from "styled-components";

import {
  UserSelectState,
  OutfitsWeatherState,
} from "../../pages/Outfits/Data/UserOutfitsData";

import { ReactComponent as Coat } from "../../assets/oufitImages/coat.svg";
import { ReactComponent as CottonPants } from "../../assets/oufitImages/cottonPants.svg";
import { ReactComponent as FieldJumper } from "../../assets/oufitImages/fieldJumper.svg";
import { ReactComponent as Gloves } from "../../assets/oufitImages/gloves.svg";
import { ReactComponent as HoodJumper } from "../../assets/oufitImages/hoodJumper.svg";
import { ReactComponent as HoodTshirt } from "../../assets/oufitImages/hoodTshirt.svg";
import { ReactComponent as Jacket } from "../../assets/oufitImages/jacket.svg";
import { ReactComponent as Jeans } from "../../assets/oufitImages/Jeans.svg";
import { ReactComponent as ThickTshirt } from "../../assets/oufitImages/thickTshirt.svg";
import { ReactComponent as KnittedHat } from "../../assets/oufitImages/knittedHat.svg";
import { ReactComponent as LongSleeve } from "../../assets/oufitImages/llongSleeve.svg";
import { ReactComponent as Muffler } from "../../assets/oufitImages/muffler.svg";
import { ReactComponent as OnePiece } from "../../assets/oufitImages/onePiece.svg";
import { ReactComponent as PaddedJumper } from "../../assets/oufitImages/paddedJumper.svg";
import { ReactComponent as Shirt } from "../../assets/oufitImages/shirt.svg";
import { ReactComponent as Shorts } from "../../assets/oufitImages/shorts.svg";
import { ReactComponent as ShortSleeveShirt } from "../../assets/oufitImages/shortSleeveShirt.svg";
import { ReactComponent as ShortSleeveTShirt } from "../../assets/oufitImages/shortSleeveTShirt.svg";
import { ReactComponent as Skirt } from "../../assets/oufitImages/skirt.svg";
import { ReactComponent as Sleeveless } from "../../assets/oufitImages/sleeveless.svg";
import { ReactComponent as Sweater } from "../../assets/oufitImages/sweater.svg";
import { ReactComponent as ThickCottonPants } from "../../assets/oufitImages/ThickCottonPants.svg";
import { ReactComponent as ThinCardigan } from "../../assets/oufitImages/thinCardigan.svg";
import { ReactComponent as TrenchCoat } from "../../assets/oufitImages/trenchCoat.svg";
import { useRecoilState } from "recoil";
const OutfitsResult = () => {
  const [userSelect] = useRecoilState(UserSelectState);
  const [weather] = useRecoilState(OutfitsWeatherState);

  const userSensibleTemp = weather.main.temp + Number(userSelect.userTemp);
  const weatherClothes = () => {
    if (userSensibleTemp >= 4 && userSensibleTemp < 9) {
      return EARY_WINTER;
    }
    if (userSensibleTemp >= 9 && userSensibleTemp < 12) {
      return FALL;
    }
    if (userSensibleTemp >= 12 && userSensibleTemp < 17) {
      return EARLY_FALL;
    }
    if (userSensibleTemp >= 17 && userSensibleTemp < 20) {
      return EARLY_SPRING;
    }
    if (userSensibleTemp >= 20 && userSensibleTemp <= 23) {
      return SPRING;
    }
    if (userSensibleTemp >= 23 && userSensibleTemp < 28) {
      return EARY_SUMMER;
    }
    if (userSensibleTemp >= 28) {
      return SUMMER;
    }
    return WINTER;
  };

  const todayRecommendOutfits = weatherClothes();

  return (
    <Wrap>
      {todayRecommendOutfits.map((outfits) => {
        return (
          <Recommend key={outfits.id}>
            <ImageWrap>{outfits.outfitImage}</ImageWrap>
            <OutfitName>{outfits.outfitType}</OutfitName>
          </Recommend>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => theme.flexMixin("center", "space-between")}
  background-color: ${(props) => props.theme.white};
  padding: 40px 70px;
  width: 100%;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.lowModalShadow};
`;

const Recommend = styled.div`
  ${({ theme }) => theme.flexMixin("center", "space-between")}
  flex-direction: column;
`;
const ImageWrap = styled.div`
  width: 130px;
  height: 130px;
  padding: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.ligthGrey};
`;
const OutfitName = styled.p`
  color: ${(props) => props.theme.mainColor};
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
`;

const WINTER = [
  {
    id: 0,
    outfitType: "패딩",
    outfitImage: <PaddedJumper />,
  },
  {
    id: 1,
    outfitType: "두꺼운 코트",
    outfitImage: <ThickCottonPants />,
  },
  {
    id: 2,
    outfitType: "목도리",
    outfitImage: <Muffler />,
  },
  {
    id: 3,
    outfitType: "니트 모자",
    outfitImage: <KnittedHat />,
  },
  {
    id: 4,
    outfitType: "장갑",
    outfitImage: <Gloves />,
  },
];

const EARY_WINTER = [
  {
    id: 0,
    outfitType: "코트",
    outfitImage: <Coat />,
  },
  {
    id: 1,
    outfitType: "트렌치 코트",
    outfitImage: <TrenchCoat />,
  },
  {
    id: 2,
    outfitType: "니트",
    outfitImage: <Sweater />,
  },
  {
    id: 3,
    outfitType: "가죽 자켓",
    outfitImage: <FieldJumper />,
  },
  {
    id: 4,
    outfitType: "장갑",
    outfitImage: <Gloves />,
  },
];

const FALL = [
  {
    id: 0,
    outfitType: "트렌치 코트",
    outfitImage: <TrenchCoat />,
  },
  {
    id: 1,
    outfitType: "니트",
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: "야상",
    outfitImage: <FieldJumper />,
  },
  {
    id: 3,
    outfitType: "청바지",
    outfitImage: <Jeans />,
  },
  {
    id: 4,
    outfitType: "후드 점퍼",
    outfitImage: <HoodJumper />,
  },
];

const EARLY_FALL = [
  {
    id: 0,
    outfitType: "자켓",
    outfitImage: <Jacket />,
  },
  {
    id: 1,
    outfitType: "니트",
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: "면바지",
    outfitImage: <ThickCottonPants />,
  },
  {
    id: 3,
    outfitType: "후드티",
    outfitImage: <HoodTshirt />,
  },
  {
    id: 4,
    outfitType: "가디건",
    outfitImage: <ThinCardigan />,
  },
];

const EARLY_SPRING = [
  {
    id: 0,
    outfitType: "청바지",
    outfitImage: <Jeans />,
  },
  {
    id: 1,
    outfitType: "얇은 니트",
    outfitImage: <Sweater />,
  },
  {
    id: 2,
    outfitType: "맨투맨",
    outfitImage: <ThickTshirt />,
  },
  {
    id: 3,
    outfitType: "가디건",
    outfitImage: <ThinCardigan />,
  },
  {
    id: 4,
    outfitType: "자켓",
    outfitImage: <Jacket />,
  },
];

const SPRING = [
  {
    id: 0,
    outfitType: "셔츠",
    outfitImage: <Shirt />,
  },
  {
    id: 1,
    outfitType: "긴팔 티셔츠",
    outfitImage: <LongSleeve />,
  },

  {
    id: 2,
    outfitType: "청바지",
    outfitImage: <Jeans />,
  },
  {
    id: 3,
    outfitType: "얇은 가디건",
    outfitImage: <ThinCardigan />,
  },

  {
    id: 4,
    outfitType: "면바지",
    outfitImage: <CottonPants />,
  },
];

const EARY_SUMMER = [
  {
    id: 0,
    outfitType: "반팔티",
    outfitImage: <ShortSleeveTShirt />,
  },

  {
    id: 1,
    outfitType: "얇은 면바지",
    outfitImage: <CottonPants />,
  },
  {
    id: 2,
    outfitType: "반팔 셔츠",
    outfitImage: <ShortSleeveShirt />,
  },

  {
    id: 3,
    outfitType: "치마",
    outfitImage: <Skirt />,
  },

  {
    id: 4,
    outfitType: "반바지",
    outfitImage: <CottonPants />,
  },
];

const SUMMER = [
  {
    id: 0,
    outfitType: "반팔티",
    outfitImage: <ShortSleeveTShirt />,
  },

  {
    id: 1,
    outfitType: "민소매",
    outfitImage: <Sleeveless />,
  },
  {
    id: 2,
    outfitType: "원피스",
    outfitImage: <OnePiece />,
  },

  {
    id: 3,
    outfitType: "치마",
    outfitImage: <Skirt />,
  },

  {
    id: 4,
    outfitType: "반바지",
    outfitImage: <Shorts />,
  },
];

export default OutfitsResult;
