import styled from "styled-components";

const StyledProfileViewModal = styled.div`
  height: 100%;
  width: 40vh;
  position: absolute;
  top: 0%;
  right: 0%;
  background: hsl(222, 80%, 12%);
  color: var(--body-text);
  transition: 0.35s all;
  transform: ${(props) => (props.open ? "translateX(1%)" : "translateX(100%)")};
  display: flex;
  flex-direction: column;
  align-items: center;

  > .heading {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-weight: 500;
      letter-spacing: 1px;
    }
    > button {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      background: var(--primary);
      transition: 0.35s all;
      cursor: pointer;
      &:hover {
        transform: rotate(180deg);
      }
      > i {
        font-size: 1.2rem;
        color: var(--body-text);
      }
    }
  }
  > .user-info {
    text-align: center;
    width: 100%;
    box-shadow: 0px 12px 2px -2px hsl(222, 80%, 8%);
    .profile-img {
      width: 8rem;
      margin: 0rem auto 1rem auto;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: hsl(222, 80%, 5%);
      border: 5px solid rgba(240, 240, 240, 0.2);
      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    > p:last-child {
      margin: 0.4rem 0rem 1.5rem 0rem;
    }
  }

  > .extra-info {
    width: 100%;
    > div {
      padding: 1.5rem;
      box-shadow: 0px 12px 2px -2px hsl(222, 80%, 8%);
      > p,
      small {
        text-transform: capitalize;
      }

      > small {
        color: var(--icon-clr);
      }

      > p {
        font-size: 1.1rem;
        margin-top: 0.4rem;
      }
    }
  }

  > .clear-chat-btn {
    margin-top: 1.5rem;
    padding: 1.5rem;
    width: 100%;
    > button {
      background: transparent;
      width: 100%;
      color: var(--danger-clr);
      font-size: 1rem;
      letter-spacing: 1px;
      border: 2px solid var(--danger-clr);
      padding: 0.6rem;
      cursor: pointer;

      &:hover {
        background: var(--danger-clr);
        color: var(--body-text);
      }
      > i {
        font-size: 1.2rem;
        margin-right: 1rem;
      }
    }
  }

  > .footer {
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 0%;
    padding: 1rem;
    background: hsl(222, 80%, 8%);
    color: var(--body-text);
    text-align: center;
  }
`;

export default StyledProfileViewModal;
