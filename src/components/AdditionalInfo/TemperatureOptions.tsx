import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changePreference } from "../../redux/slice/weatherSlice";

interface Props {
  active?: boolean;
}

const TemperatureOptions = () => {
  const { preference } = useSelector((state: any) => state.weather);
  const dispatch = useDispatch();
  return (
    <StyledContainer>
      <StyledButton
        onClick={() => dispatch(changePreference(0))}
        active={preference === 0}
      >
        °C
      </StyledButton>
      <StyledButton
        onClick={() => dispatch(changePreference(1))}
        active={preference === 1}
      >
        °F
      </StyledButton>
    </StyledContainer>
  );
};

export default TemperatureOptions;

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

const StyledButton = styled.button<Props>`
  cursor: pointer;
  font-weight: 700;
  border: none;
  border-radius: 50%;
  font-size: 22px;
  width: 40px;
  height: 40px;
  background: ${(props) => (props.active ? "#e7e7eb" : "#585676")};
  color: ${(props) => (props.active ? "#110E3C" : "#E7E7EB")};
`;
