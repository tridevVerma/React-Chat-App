import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 80vw;
  min-height: 90vh;
  max-height: 90vh;
  display: grid;
  grid-template-columns: 100%;
  background: linear-gradient(to right bottom, #3d4049, #171b22);
  @media screen and (min-width: 725px) {
    grid-template-columns: 35% 65%;
  }
`;

export default StyledContainer;
