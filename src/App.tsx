import styled from "styled-components";
import AdditionalInfo from "./components/AdditionalInfo";
import MainInfo from "./components/MainInfo";
import SearchSection from "./components/SearchSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StyledContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route
              path="/search"
              element={<SearchSection />}
            />
          </Routes>
        </BrowserRouter>
        <AdditionalInfo />
      </StyledContainer>
    </div>
  );
}

// APP
const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  min-height: 100vh;
  & > section:first-child {
    flex: 2;
  }
`;

export default App;
