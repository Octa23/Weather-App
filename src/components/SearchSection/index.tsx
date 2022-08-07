import styled from "styled-components";
import { MdClose, MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import useWeather from "../../hooks/useWeather";
import Spinner from "../Spinner";

const SearchSection = () => {
  const { Results,loading } = useSelector((state: any) => state.search);
  const { handleSearch } = useSearch();
  const { handleSelect } = useWeather();
  return (
    <StickyContainer>
      <StyledContainer>
        <div>
          <button>
            <Link to={"/"}>
              <MdClose />
            </Link>
          </button>
        </div>
        <StyledForm>
          <label>
            <MdSearch />{" "}
            <input
              placeholder="Search location (minimum 3 characters)"
              onChange={handleSearch}
              type="text"
              id="Name"
              name="Name"
            />
          </label>
          {loading && <Spinner />}
        </StyledForm>
        <StyledList>
          {Results &&
            Results.map((option: any) => (
              <li key={option.id} onClick={() => handleSelect(option.name)}>
                {option.name}
                <MdKeyboardArrowRight />
              </li>
            ))}
        </StyledList>
      </StyledContainer>
    </StickyContainer>
  );
};

export default SearchSection;

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
  gap: 30px;
  > div,
  ul {
    padding: 0 30px;
  }
  > div:first-child {
    padding: 30px 30px 0 30px;
    display: flex;
    justify-content: end;
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      color: rgba(231, 231, 235, 1);
      font-size: 32px;
    }
  }
`;

const StyledForm = styled.div`
  display: flex;
  gap: 10px;
  > label {
    flex: 1;
    color: rgba(97, 100, 117, 1);
    display: flex;
    gap: 10px;
    align-items: center;
    border: 1px solid #e7e7eb;
    padding: 10px;
    svg {
      font-size: 24px;
    }
    > input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 18px;
      width: 100%;
      color: rgba(231, 231, 235, 1);
      ::placeholder {
        color: rgba(97, 100, 117, 1);
      }
    }
  }
  > button {
    background: #3c47e9;
    color: rgba(231, 231, 235, 1);
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 20px;
  margin-bottom: 30px;

  > li {
    cursor: pointer;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid transparent;
    svg {
      font-size: 24px;
      color: transparent;
    }
    &:hover {
      border: 1px solid rgba(97, 100, 117, 1);
      svg {
        font-size: 24px;
        color: rgba(97, 100, 117, 1);
      }
    }
  }
`;
