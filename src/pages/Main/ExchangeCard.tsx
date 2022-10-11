import styled from "styled-components";

interface ItemProps {
  nation: string;
  price: string;
  unit: string;
}
const ExchangeCard = ({ unit, nation, price }: ItemProps) => {
  return (
    <ExchangeItem>
      <ExchangeTitle>SALES OVERVIEW</ExchangeTitle>
      <ExchangeInfo>국가 : {nation}</ExchangeInfo>
      <ExchangeInfo>
        가격 : <strong>{price}</strong>원{" "}
      </ExchangeInfo>
      <ExchangeInfo>단위 : {unit} </ExchangeInfo>
    </ExchangeItem>
  );
};

export default ExchangeCard;

const ExchangeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: calc(100% - 60px);
  margin: 0 30px;
  height: 200px;
  border: 1px solid black;
  box-shadow: 10px 5px 5px gray;
`;

const ExchangeTitle = styled.div`
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.mainColor};
`;
const ExchangeInfo = styled.div`
  margin: 10px;
  font-size: 18px;

  strong {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;
