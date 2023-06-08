import styled from "styled-components";

const StyledMain = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  > .heading {
    > ul {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 1.5rem;
      box-shadow: inset 0px -4px 8px -6px rgba(255, 255, 255, 0.2);
      background: linear-gradient(to right, #3b3d47, #2a2d35);
      > li.img-container {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--icon-bg);
        box-shadow: var(--icon-shadow);
        margin-right: 1rem;
        > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      > li {
        color: var(--body-text);
        > h4 {
          font-size: 1.15rem;
          letter-spacing: 1px;
        }

        > button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 0.4rem;
          background: var(--icon-bg);
          box-shadow: 5px 10px 25px -3px rgba(0, 0, 0, 0.6),
            -2px -2px 15px -3px rgba(255, 255, 255, 0.3);
          cursor: pointer;

          &:active {
            box-shadow: 5px 6px 12px -3px rgba(0, 0, 0, 0.6),
              -2px -2px 10px -3px rgba(255, 255, 255, 0.2);
          }
          > i {
            color: hsl(199, 80%, 50%);
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  > .footer {
    margin: 0rem 1rem 1rem 1rem;
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    grid-gap: 1rem;

    > button {
      background: transparent;
      > i {
        color: hsl(199, 80%, 50%);
        font-size: 1.2rem;
      }
    }

    > button.emoji {
      > i {
        color: hsl(48, 80%, 50%);
      }
    }
    > form {
      position: relative;

      > .emoji-picker {
        position: absolute;
        bottom: 3rem;
        left: -4.8rem;
        display: ${(props) => (props.open ? "block" : "none")};
      }
      > input {
        width: 100%;
        flex-grow: 1;
        font-size: 1rem;
        border-radius: 2rem;
        padding: 0.8rem 1.4rem;
        background: transparent;
        color: var(--body-text);
        box-shadow: inset -8px 4px 8px -2px rgba(0, 0, 0, 0.8),
          inset 2px -3px 8px -4px rgba(180, 180, 180, 0.6);
      }
      > button {
        background: transparent;
        position: absolute;
        top: 0.7rem;
        right: 1.3rem;

        > i {
          color: hsl(199, 80%, 50%);
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default StyledMain;
