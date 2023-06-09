import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 90vh;
  max-height: 90vh;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
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
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 0.4rem;
          background: var(--icon-bg);
          box-shadow: var(--icon-shadow);
          cursor: pointer;

          &:active {
            box-shadow: var(--icon-active-shadow);
          }
          > i {
            color: var(--primary);
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  > .conversation-container {
    position: relative;
    padding: 1.5rem;
    max-height: 100%;
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
      background: var(--primary-bg);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    > .floating-msg {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      > p {
        display: inline-block;
        color: hsl(0, 0%, 40%);
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        box-shadow: inset 2px 4px 10px -4px rgba(0, 0, 0, 0.8),
          inset -2px -2px 10px -4px rgba(210, 210, 210, 0.2);
      }
    }

    > .msg-box {
      text-align: left;
      margin-bottom: 1.5rem;
      > p {
        max-width: 70%;
        display: inline-block;
        padding: 0.6rem 1rem;
        background: linear-gradient(
          to right,
          hsl(199, 8%, 15%),
          hsl(199, 8%, 18%)
        );
        box-shadow: var(--icon-shadow);
        color: var(--body-text);
        border-radius: 0.3rem;
        > span {
          text-transform: uppercase;
          display: block;
          font-size: 0.8rem;
          text-align: right;
          margin-top: 0.6rem;
          > i {
            font-size: 0.7rem;
            margin-right: 0.3rem;
          }
        }
      }

      > .sender-info {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 0.6rem;
        > small {
          order: 2;
          color: hsl(0, 0%, 60%);
        }
        > .profile-img {
          order: 1;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          padding: 0.4rem;
          background: var(--icon-bg);
          box-shadow: var(--icon-shadow);
          > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    > .me {
      text-align: right;
      > p {
        background: linear-gradient(
          to right,
          var(--primary),
          var(--primary-light)
        );
        color: var(--body-text);
      }

      > .sender-info {
        justify-content: flex-end;
        > small {
          order: 1;
        }
        > .profile-img {
          order: 2;
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
        color: var(--primary);
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
          color: var(--primary);
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default StyledMain;
