import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import getDate from "../../utils/getDate";
import { useSelector } from "react-redux";

interface Props {
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
    };
  };
  location: {
    localtime: string;
    name: string;
  };
}

const CurrentWeatherInfo = ({ current, location }: Props) => {
  const { dateString, time } = getDate(location?.localtime);
  const { preference } = useSelector((state: any) => state.weather);

  return (
    <StyledContainer>
      {preference ? (
        <p>
          {current?.temp_f}
          <span>°F</span>
        </p>
      ) : (
        <p>
          {current?.temp_c}
          <span>°C</span>
        </p>
      )}
      <p>{current?.condition?.text}</p>
      <div>
        <StyledDate>
          <span>{dateString}</span>
          <span>&bull;</span>
          <span>{time}</span>
        </StyledDate>
        <StyledLocation>
          <MdLocationOn />
          {location?.name}
        </StyledLocation>
      </div>
    </StyledContainer>
  );
};

export default CurrentWeatherInfo;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  @media (max-width: 568px) {
    gap: 50px;
  }
  > p:first-child {
    color: #e7e7eb;
    font-size: 144px;
    font-weight: 500;
    @media (max-width: 568px) {
      font-size: 48px;
    }

    > span {
      color: #a09fb1;
      font-size: 48px;
      @media (max-width: 568px) {
        font-size: 36px;
      }
    }
  }
  > p:nth-child(2) {
    font-size: 36px;
    color: #a09fb1;
    font-weight: 600;
    text-align: center;
    padding: 0 10px ;
    line-height: 1;
  }
  > div {
    color: #88869d;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const StyledDate = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledLocation = styled.p`
  font-weight: 600;
  font-size: 18px;
  display: flex;
  gap: 5px;
  padding-bottom: 30px;
  align-items: center;
  > svg {
    font-size: 20px;
  }
`;
