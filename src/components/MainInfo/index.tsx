import { useSelector } from "react-redux";
import styled from "styled-components";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import SearchMethods from "./SearchMethods";

const MainInfo = () => {
  const {current,location} = useSelector(
    (state: any) => state.weather.selectedWeather
  );
  const condition = current?.condition.text.replace(/ /g, "") ?? "";

  return (
    <StickyContainer>
      <StyledContainer>
        <SearchMethods />
        <CurrentWeatherIcon>
          <img src={`./assets/${condition}.png`} alt={condition} />
        </CurrentWeatherIcon>
        <CurrentWeatherInfo
          current={current}
          location={location}
        />
      </StyledContainer>
    </StickyContainer>
  );
};

export default MainInfo;

const StickyContainer = styled.section`
  position: relative;
  @media (min-width: 768px) {
    max-width: 460px;
  }
`;
const StyledContainer = styled.section`
  position: sticky;
  top: 0;
  background: #1e213a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const CurrentWeatherIcon = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 100%
    ),
    url("./assets/Cloud-background.png");
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: 150%;
  margin-bottom: 50px;
  > img {
    max-width: 150px;
    @media (min-width: 768px) {
      max-width: unset;
    }
  }
`;
