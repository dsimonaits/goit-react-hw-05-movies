import styled from 'styled-components';

export const MovieCardItem = styled.li`
  font-size: 12px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    transform: scale(1.05);
  }

  flex-basis: calc((90% -4 * 15px) / 2);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 8 * 15px) / 4);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 8 * 15px) / 5);
  }
`;

export const MovieTitle = styled.h3`
  margin-top: 10px;
`;

export const MovieImg = styled.img`
  border-radius: 15px;
`;
