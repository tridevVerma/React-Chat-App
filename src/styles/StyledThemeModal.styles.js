import styled from "styled-components";

const StyledThemeModal = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: white;
  border-radius: 1rem;
  width: 30%;
  background: hsl(222, 80%, 12%);

  > .heading {
    width: 100%;
    padding: 1.5rem;
    padding-bottom: 1rem;
    box-shadow: 0px 2px 2px -2px rgba(255, 255, 255, 0.3);
    text-align: center;
    > h4 {
      font-size: 1.4rem;
    }
  }

  > ul {
    margin: 1.5rem auto;
  }
`;

export const StyledLI = styled.li`
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 1rem;
  > span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) => `hsl(${props.color}, 70%, 50%)`};
  }
  > button {
    background: var(--icon-bg);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: var(--icon-shadow);
    &:active {
      box-shadow: var(--icon-active-shadow);
    }
    cursor: pointer;
    > i {
      font-size: 1rem;
      color: ${(props) => `hsl(${props.color}, 70%, 50%)`};
    }
  }
`;

export default StyledThemeModal;
