import styled from "styled-components";

interface ItemProps {
  nation: string;
  price: string;
  unit: string;
}
interface flagProps {
  id: number;
  name: string;
  flag_url: JSX.Element;
}
const ExchangeCard = ({ unit, nation, price }: ItemProps) => {
  return (
    <ExchangeItem>
      <ExchangeTitle>SALES OVERVIEW</ExchangeTitle>
      <ExchangeInfo>국가 : {nation} </ExchangeInfo>
      <ExchangeInfo>
        ₩<strong>{price}</strong>
      </ExchangeInfo>

      <ExchangeInfo>통화명 : {unit} </ExchangeInfo>
    </ExchangeItem>
  );
};

export default ExchangeCard;

const ExchangeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  width: calc(100% - 60px);
  margin: 0 30px;
  padding: 0 25px;
  height: 200px;
  border: none;
  box-shadow: ${({ theme }) => theme.lowModalDeepShadow};
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
