import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 17%;
  position: fixed;
  padding: 0.2rem 1rem;
  background-color: #1e67e7;
  color: #fff;

  @media screen and (max-width : 600px ) {
    width: 7%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;

  .logo-icon {
    margin-right: 0.5rem;

    @media screen and (max-width : 1024px ) {
      display: none;
    }

    @media screen and (max-width : 600px ) {
      display: inline;
      justify-self: center;
      font-size: 2.5rem;
    }
  }
`;

export const Menu = styled.div`
  margin: 2rem 0;
  display: grid;
`;

export const Item = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 2rem 5rem;
  height: 2.5rem;
  margin: 1rem 0;
  padding-left: 1rem;
  row-gap: 2rem;
  align-items: center;
  color: #fff;
  border-radius: 5rem;
  transition: 0.2s all smooth;

  @media screen and (max-width : 600px ) {
    width: 48.5%;
    margin-left: -1rem;
    border-radius: 0;

    .icon, .logo-icon {
      font-size: 2.5rem;
    }

    h3 {
      display: none;
    }
  }

  .icon {
    font-size: 1.4rem;
    margin-right: 1rem;
  }

  &:hover {
    background-color: #fff;
    color: #1e67e7;
    cursor: pointer;
  }
`;
