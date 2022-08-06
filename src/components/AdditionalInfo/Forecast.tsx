import styled from "styled-components";

const Forecast = () => {
  return (
    <StyledGrid>
      <StyledCard>
        <p>Tomorrow</p>
        <img src="./assets/HeavyRain.png" alt="Heavy Rain" />
        <Temperatures>
          <span>16°C</span>
          <span>11°C</span>
        </Temperatures>
      </StyledCard>
      <StyledCard>
        <p>Tomorrow</p>
        <img src="./assets/Clear.png" alt="Heavy Rain" />
        <Temperatures>
          <span>16°C</span>
          <span>11°C</span>
        </Temperatures>
      </StyledCard>
      <StyledCard>
        <p>Tomorrow</p>
        <img src="./assets/Hail.png" alt="Heavy Rain" />
        <Temperatures>
          <span>16°C</span>
          <span>11°C</span>
        </Temperatures>
      </StyledCard>
      <StyledCard>
        <p>Tomorrow</p>
        <img src="./assets/HeavyCloud.png" alt="Heavy Rain" />
        <Temperatures>
          <span>16°C</span>
          <span>11°C</span>
        </Temperatures>
      </StyledCard>
      <StyledCard>
        <p>Tomorrow</p>
        <img src="./assets/Snow.png" alt="Heavy Rain" />
        <Temperatures>
          <span>16°C</span>
          <span>11°C</span>
        </Temperatures>
      </StyledCard>
    </StyledGrid>
  );
};

export default Forecast;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
`;

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
    object-position: -5px -10px;
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
