import { useSelector } from "react-redux";
import styled from "styled-components";
import WeatherCard from "./WeatherCard";

const Forecast = () => {
  const { forecast } = useSelector((state: any) => state.weather.selectedWeather);
  return (
    <StyledGrid>
      {forecast?.forecastday?.map((day: any) => <WeatherCard key={day.date} SingleDay={day}  />)}
    </StyledGrid>
  );
};

export default Forecast;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
`;


