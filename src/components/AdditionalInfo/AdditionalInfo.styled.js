import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heading = styled.h3`
  margin-top: 20px;
`;
export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const InfoItems = styled.li`
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  padding: 5px;
  /* outline: 1px solid white;
  border-radius: 10px; */

  &:hover {
    color: red;
  }

  &.active {
    color: red;
  }
`;
