import styled from "styled-components";
import Forecast from "./Forecast";
import Hightlights from "./Hightlights";
import HourlyForecast from "./HourlyForecast";
import TemperatureOptions from "./TemperatureOptions";

const AdditionalInfo = () => {
  return (
    <StyledContainer>
      <div>
        <TemperatureOptions />
        <Forecast />
        <Hightlights />
        <HourlyForecast />
      </div>
    </StyledContainer>
  );
};

export default AdditionalInfo;

const StyledContainer = styled.section`
  background: #100e1d;
  min-height: 100vh;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 0;

  > div {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;
