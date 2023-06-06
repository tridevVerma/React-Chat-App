import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: var(--sidebar-bg);

  > .user-info {
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
    margin: 1.5rem auto;
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
`;

export default StyledSidebar;
