import React from "react";
import styled from "styled-components";
import { MdNavigation } from "react-icons/md";
import ProgressBar from "./ProgressBar";
const Hightlights = () => {
  return (
    <StyledContainer>
      <h2>Today's Hightlights</h2>
      <StyledGrid>
        <div>
          <p>Wind status</p>
          <StyledText>
            7<span>mph</span>
          </StyledText>
          <StyledNavigation>
            <MdNavigation />
            <p>Direction</p>
          </StyledNavigation>
        </div>
        <div>
          <p>Humidity</p>
          <StyledText>
            87<span>%</span>
          </StyledText>
          <ProgressBar completed={71} />
        </div>
        <div>
          <p>Visibility</p>
          <StyledText>
            6,4<span> miles</span>
          </StyledText>
        </div>
        <div>
          <p>Air Pressure</p>
          <StyledText>
            998<span> mb</span>
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

const StyledNavigation = styled.div`
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
    transform: rotate(-150deg);
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
