import styled from "styled-components";

const StyledBlank = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .img-container {
    width: 30%;
    margin-bottom: 2rem;
    > img {
      width: 100%;
      object-fit: cover;
    }
  }

  > .text {
    text-align: center;
    color: var(--body-text);
    > h3 {
      line-height: 3rem;
    }
  }
`;

export default StyledBlank;
