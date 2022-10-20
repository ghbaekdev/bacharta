import * as SC from "./style";

const Loading = () => {
  return (
    <SC.Wrapper>
      <SC.LoadingBar>
        <SC.Dot />
        <SC.Dot />
        <SC.Dot />
      </SC.LoadingBar>
    </SC.Wrapper>
  );
};

export default Loading;
