import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Queries = () => {
  const getData = () => {
    axios.get("http://127.0.0.1:3001/covid");
  };
  const { status, data, error } = useQuery(["getData"], getData, {
    refetchOnWindowFocus: true,
    retry: 0,
  });

  if (status === "loading") {
    return "loading중";
  }
  if (status === "error") {
    return "error";
  }

  console.log(data);
  return <div>시험삼아 해보기</div>;
};

export default Queries;
