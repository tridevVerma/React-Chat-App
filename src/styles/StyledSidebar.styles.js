import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 100%;
  background: var(--sidebar-bg);
  min-height: 90vh;
  max-height: 90vh;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);

  > .user-info {
    width: 100%;
    padding: 1.5rem;
    padding-bottom: 0.8rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
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

    > p {
      margin-left: 1rem;
      color: var(--body-text);
      text-transform: capitalize;
    }
    > ul {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media screen and (min-width: 425px) {
        gap: 1.5rem;
      }
      > li {
        display: grid;
        place-items: center;
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
            color: var(--primary);
          }
        }
      }
    }
  }

  > .search-box {
    width: 100%;
    padding: 0rem 1.5rem;
    margin: 1rem auto;
    position: relative;

    > i {
      position: absolute;
      top: 0.8rem;
      right: 2.5rem;
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
      background: var(--primary-bg);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    > ul {
      > .contact-selected {
        background: linear-gradient(
          to right,
          rgba(155, 155, 155, 0.2),
          rgba(155, 155, 155, 0.1)
        );
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
            > small {
              text-transform: uppercase;
              font-size: 0.8rem;
            }
            > span {
              &:nth-child(2).active {
                display: block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--active-clr);
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledSidebar;
