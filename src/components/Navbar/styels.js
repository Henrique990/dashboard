import styled from 'styled-components';

const Navbar = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #1e67e7;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const NavbarDiv = styled.div`
  margin-right: 1rem;
  box-shadow: none;
`;

const NavIcon = styled.i`
  font-size: 1.5rem;
  color: #fff;
`;

const Search = styled.div`
  height: 2rem;
  width: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 20px;
  &:hover {
    background-color: #8cccf4;
  }
`;

const SearchIcon = styled(NavIcon)`
  padding-right: 0.5rem;
  color: #fff;
`;

const Notification = styled.div`
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  height: 0.8rem;
  width: 0.8rem;
  top: 1.9rem;
  margin-left: 0.7rem;
  background-color: #4cd137;
  border-radius: 50%;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
`;

const UserSpan = styled.span`
  padding-right: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  color: #fff;
`;

const UserImg = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export { Navbar, NavbarDiv, NavIcon, Search, SearchIcon, Notification, Indicator, User, UserSpan, UserImg };
