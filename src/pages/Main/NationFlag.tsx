import NATION_FLAG from "../../data/NATION_FLAG";
import styled from "styled-components";

const NationFlag = () => {
  return (
    <FlagContainer>
      {NATION_FLAG.map((el) => {
        return <FlagContainer key={el.id}>{el.flag_url}</FlagContainer>;
      })}
    </FlagContainer>
  );
};

export default NationFlag;

const FlagContainer = styled.div`
  display: flex;
`;
