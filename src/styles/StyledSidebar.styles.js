import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 100%;
  height: 100%;
  background: var(--sidebar-bg);
  display: grid;
  grid-template-rows: auto auto 1fr;

  > .user-info {
    width: 100%;
    padding: 1.5rem;
    padding-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--icon-bg);
      padding: 0.3rem;
      box-shadow: var(--icon-shadow);
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    > ul {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media screen and (min-width: 425px) {
        gap: 1.5rem;
      }
      > li {
        background: var(--icon-bg);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        box-shadow: var(--icon-shadow);
        > i {
          font-size: 1rem;
          color: hsl(199, 80%, 50%);
        }
      }
    }
  }

  > .search-box {
    width: 100%;
    padding: 0rem 1.5rem;
    margin: 1rem auto;
    > form {
      position: relative;
      > i {
        position: absolute;
        top: 10px;
        right: 16px;
        color: grey;
      }
      > input {
        width: 100%;
        background: var(--input-bg);
        color: var(--body-text);
        padding: 0.8rem 1rem;

        border-radius: 2rem;
        box-shadow: var(--input-shadow);
      }
    }
  }

  > .recent-chats {
    width: 100%;
    max-height: 74vh;
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

    > ul {
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
              width: 15rem;
              margin-top: 0.5rem;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          > .status {
            margin-right: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            > span {
              &:nth-child(2).active {
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: hsl(110, 50%, 40%);
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledSidebar;
