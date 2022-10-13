import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const Queries = () => {
  const getData = async () => {
    const { data } = await axios.get("http://127.0.0.1:3001/covid");
    return data;
  };
  // "getData" 키값
  // 성공시
  // onSuccess : data => {
  //   console.log(data,"useQ");
  // }
  const { status, data, error } = useQuery(["getData"], getData, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log(data, "useQuery 통신 성공");
    },
    onError: (e) => {
      console.log(e, "에러가 생겼어요");
    },
  });

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <Loading />;
  }

  console.log(data);
  return <div>시험삼아 해보기</div>;
};

export default Queries;
