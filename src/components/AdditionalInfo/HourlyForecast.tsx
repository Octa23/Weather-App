import styled from "styled-components";
import WeatherChart from "../Chart";


const HourlyForecast = () => {

  return (
    <StyledContainer>
      <h2>Today's Hourly Forecast</h2>
      <WeatherChart/>
    </StyledContainer>
  );
};

export default HourlyForecast;

const StyledContainer = styled.section`
  > h2 {
    margin-bottom: 30px;
  }
`;
