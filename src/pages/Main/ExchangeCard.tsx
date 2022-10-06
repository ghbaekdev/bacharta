import styled, { keyframes } from "styled-components";

interface ItemProps {
  nation: string;
  price: string;
  unit: string;
}
const ExchangeCard = ({ unit, nation, price }: ItemProps) => {
  return (
    <ExchangeItem>
      <ExchangeNation>국가 : {nation}</ExchangeNation>
      <ExchangeNation>가격 : {price}원 </ExchangeNation>
      <ExchangeNation>단위 : {unit} </ExchangeNation>
    </ExchangeItem>
  );
};

export default ExchangeCard;

const ExchangeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 60px);
  margin: 0 30px;
  height: 300px;
  border: 1px solid black;
  box-shadow: 10px 5px 5px gray;
`;

const ExchangeNation = styled.div`
  margin: 10px;
  font-size: 20px;
`;
