import styled from "styled-components";

const StyledModal = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: white;
  border-radius: 1rem;
  width: 40%;
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
    margin-bottom: 1rem;
    max-height: 70vh;
    overflow-y: scroll;
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: hsla(199, 80%, 50%, 0.8);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    > li {
      > a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        padding: 1rem 0rem;
        box-shadow: 0px 2px 2px -2px rgba(255, 255, 255, 0.3);
        color: var(--body-text);
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        grid-gap: 1rem;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
        &:hover {
          background: linear-gradient(
            to right,
            rgba(155, 155, 155, 0.2),
            rgba(155, 155, 155, 0.1)
          );
        }

        > .profile-image {
          margin-left: 1.5rem;
          width: 50px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          padding: 0.4rem;
          background: var(--icon-bg);
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        > .content {
          small {
            margin-top: 0.5rem;
            display: block;
          }
        }

        > button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 1rem;
          background: var(--icon-bg);
          color: hsl(199, 80%, 50%);
        }
      }
    }
  }
`;

export default StyledModal;
