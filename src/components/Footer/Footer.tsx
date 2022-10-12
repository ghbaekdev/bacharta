import React from "react";
import styled from "styled-components";
import TeamProfile from "./TeamProfile";
const Footer = () => {
  return (
    <Wrap>
      <Contents>
        <FooterTitle>About us</FooterTitle>
        <TeamInfos>
          {TEAM_PROFILE.map((profile) => {
            return (
              <TeamProfile
                name={profile.name}
                key={profile.id}
                gitURL={profile.gitURL}
                blogURL={profile.blogURL}
                duty={profile.duty}
                profileImage={profile.profileImage}
              />
            );
          })}
        </TeamInfos>
      </Contents>
    </Wrap>
  );
};

const TEAM_PROFILE = [
  {
    id: 0,
    name: "김인태",
    gitURL: "https://github.com/dlsxody1",
    blogURL: "https://velog.io/@carloskim",
    duty: "Main Page, backend",
    profileImage: "/images/footerImage/intae.png",
  },
  {
    id: 1,
    name: "박보현",
    gitURL: "https://github.com/v-park",
    blogURL: "https://velog.io/@vanessa",
    duty: "Map Page",
    profileImage: "/images/footerImage/vanessa.png",
  },
  {
    id: 2,
    name: "백광현",
    gitURL: "https://github.com/ghbaekdev",
    blogURL: "https://velog.io/@bbbb_0221",
    duty: "Loin Page, Nav",
    profileImage: "/images/footerImage/kwang.png",
  },
  {
    id: 3,
    name: "이후경",
    gitURL: "https://github.com/kyungbaa",
    blogURL: "https://velog.io/@kyung-baa",
    duty: "Outifits Page, Footer, Design",
    profileImage: "/images/footerImage/hooo.png",
  },
];

const Wrap = styled.footer`
  width: 100%;
  margin-top: 120px;
  background-color: ${(props) => props.theme.deepGrey};
  border-bottom: 8px solid ${(props) => props.theme.hoverBlue};
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const Contents = styled.div`
  padding: 30px 0;
  width: 1080px;
`;

const TeamInfos = styled.div`
  ${({ theme }) => theme.flexMixin("", "")}
`;
const FooterTitle = styled.h2`
  margin-bottom: 1.3em;
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props) => props.theme.white};
`;

export default Footer;
