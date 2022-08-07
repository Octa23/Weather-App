import React from "react";
import styled from "styled-components";
import { MdNavigation } from "react-icons/md";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { keyBy } from "lodash";

interface Props {
  direction: string;
}

interface Weather {
  wind_kph: number;
  humidity: number;
  vis_km: number;
  pressure_mb: number;
  wind_dir: string;
}

const Hightlights = () => {
  const { current } = useSelector(
    (state: any) => state.weather.selectedWeather
  );

  const directions:any = {
    N: "0",
    NNE: "22.5",
    NE: "45",
    ENE: "67.5",
    E: "90",
    ESE: "112.5",
    SE: "135",
    SSE: "157.5",
    S: "180",
    SSW: "202.5",
    SW: "225",
    WSW: "247.5",
    W: "270",
    WNW: "292.5",
    NW: "315",
    NNW: "337.5",
  };

  const { wind_kph, humidity, vis_km, pressure_mb, wind_dir } = current as Weather || {};
  return (
    <StyledContainer>
      <h2>Today's Hightlights</h2>
      <StyledGrid>
        <div>
          <p>Wind status</p>
          <StyledText>
            {wind_kph}
            <span>kph</span>
          </StyledText>
          <StyledNavigation direction={directions[wind_dir]}>
            <MdNavigation />
            <p>{wind_dir}</p>
          </StyledNavigation>
        </div>
        <div>
          <p>Humidity</p>
          <StyledText>
            {humidity}
            <span>%</span>
          </StyledText>
          <ProgressBar completed={humidity} />
        </div>
        <div>
          <p>Visibility</p>
          <StyledText>
            {vis_km}
            <span> km</span>
          </StyledText>
        </div>
        <div>
          <p>Air Pressure</p>
          <StyledText>
            {pressure_mb}
            <span> mb</span>
          </StyledText>
        </div>
      </StyledGrid>
    </StyledContainer>
  );
};

export default Hightlights;

const StyledContainer = styled.section`
  > h2 {
    margin-bottom: 30px;
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;

  > div {
    background-color: #1e213a;
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
  }
`;

const StyledNavigation = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 10px;
  > svg {
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50%;
    transform: ${(props) => `rotate(${props.direction}deg)`};
    transition: all 1s ease-in-out;
  }
`;

const StyledText = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.5;
  > span {
    font-size: 36px;
    font-weight: 500;
  }
`;
