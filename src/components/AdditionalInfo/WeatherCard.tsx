import { useSelector } from "react-redux";
import styled from "styled-components";
import getDate from "../../utils/getDate";

const WeatherCard = ({ SingleDay }: any) => {
  const { date, day } = SingleDay;
  const Day = getDate(date + " 1:00").dayName;
  const condition = day.condition.text.replace(/ /g, "") ?? "";
  const { preference } = useSelector((state: any) => state.weather);
  return (
    <StyledCard>
      <p>{Day}</p>
      <img src={day?.condition?.icon} alt={condition} />
      <Temperatures>
        <span>{preference ? `${day.maxtemp_f}°F` : `${day.maxtemp_c}°C`}</span>
        <span>{preference ? `${day.mintemp_f}°F` : `${day.mintemp_c}°C`}</span>
      </Temperatures>
    </StyledCard>
  );
};

export default WeatherCard;

const StyledCard = styled.div`
  font-weight: 500;
  background: #1e213a;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  > img {
    width: 100%;
    max-width: 100px;
  }
`;
const Temperatures = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  > span:nth-child(2) {
    color: #a09fb1;
  }
`;
