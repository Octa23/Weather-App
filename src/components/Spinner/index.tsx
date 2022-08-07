import styled from 'styled-components'


const Spinner = () => {
  return (
    <StyledSpinner />
  )
}

const StyledSpinner = styled.div`
  position: relative;
  margin: auto;
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height:40px;
  border-radius: 50%;
  border-left-color: #3c47e9;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

`

export default Spinner