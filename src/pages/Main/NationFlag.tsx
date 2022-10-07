import styled from "styled-components";
import NATION_FLAG from "../../data/NATION_FLAG";

const NationFlag = () => {
  return (
    <>
      {NATION_FLAG.map(({ flag_url }) => {
        return <FlagImage src={flag_url} />;
      })}
    </>
  );
};

export default NationFlag;

const FlagImage = styled.img`
  width: 30px;
  height: 30px;
`;
