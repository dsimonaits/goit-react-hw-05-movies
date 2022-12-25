import styled from 'styled-components';

export const ActorListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ActorLIstItem = styled.li`
  font-size: 12px;

  flex-basis: calc((90% -6 * 10px) / 3);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10 * 10px) / 5);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 16 * 10px) / 8);
  }
`;
