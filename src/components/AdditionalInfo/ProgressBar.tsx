import styled from "styled-components";

interface Props {
  completed: number;
}

const ProgressBar = ({ completed }: Props) => {
  return (
    <StyledBar>
      <StyledColorBar completed={completed}></StyledColorBar>
      <div>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <span>%</span>
    </StyledBar>
  );
};

export default ProgressBar;

const StyledBar = styled.div`
  margin-top: 20px;
  color: rgba(160, 159, 177, 1);
  width: 100%;
  background-color: rgba(231, 231, 235, 1);
  position: relative;
  border-radius: 10px;
  > div:nth-child(2) {
    position: absolute;
    display: flex;
    width: 100%;
    top: -25px;
    justify-content: space-between;
    > span {
      width: 40px;
      :nth-child(2) {
        text-align: center;
      }
      :nth-child(3) {
        text-align: right;
      }
    }
  }
  > span {
    position: absolute;
    bottom: -25px;
    width: 100%;
    text-align: end;
  }
`;
const StyledColorBar = styled.div<Props>`
  width: ${(props) =>
    props.completed > 100 ? 100 : props.completed < 0 ? 0 : props.completed}%;
  background-color: rgba(255, 236, 101, 1);
  border-radius: 10px;
  height: 10px;
`;
