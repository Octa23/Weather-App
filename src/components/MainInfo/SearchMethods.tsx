import styled from "styled-components";
import { MdGpsFixed } from "react-icons/md";
import { Link } from "react-router-dom";
import getCurrentPosition from "../../utils/getCurrentPosition";

const SearchMethods = () => {
  return (
    <StyledContainer>
      <StyledButton>
        <Link to={"/search"}>Search for places</Link>
      </StyledButton>
      <StyledButton onClick={getCurrentPosition}>
        <MdGpsFixed />
      </StyledButton>
    </StyledContainer>
  );
};

export default SearchMethods;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  button:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 22px;
    width: 40px;
    height: 40px;
    padding: 0;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  padding: 10px 18px;
  font-size: 16px;
  color: #e7e7eb;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;
