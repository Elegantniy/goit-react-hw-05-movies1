import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackLink = styled(Link)`
  display: block;
  width: 60px;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 10px;
  color: black;

  :active {
    color: purple;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 10px;
  color: black;

  :active {
    color: purple;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 20px;
`;
