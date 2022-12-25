import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MovieIMg = styled.img`
  height: fit-content;
  margin-right: 15px;
`;

export const MovieDetailsWrapper = styled.div``;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  margin-bottom: 10px;
`;

export const OverviewList = styled.ul`
  margin-bottom: 10px;
`;

export const OverviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
