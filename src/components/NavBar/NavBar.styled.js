import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavListItem = styled.li`
  font-size: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    color: #c61212;
  }
`;

export const Logo = styled(SiThemoviedatabase)`
  color: white;
  width: 50px;
  height: 50px;

  margin-right: 30px;
`;
