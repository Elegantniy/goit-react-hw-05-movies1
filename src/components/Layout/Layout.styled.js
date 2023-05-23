import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: rgba(20, 20, 20, 0.2) 0px 5px 10px;
`;

export const Main = styled.main`
  padding: 0 25px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  padding: 15px 25px;
  text-decoration: none;
  color: black;

  &.active {
    color: purple;
  }
`;
