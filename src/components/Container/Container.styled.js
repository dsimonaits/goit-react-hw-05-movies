import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  min-height: ${props => props.height};
  @media screen and (min-width: 320px) {
    width: 320px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
