import styled from 'styled-components';
import { SiThemoviedatabase } from 'react-icons/si';

export const FooterStyled = styled.footer`
  padding: 20px;
  width: auto;
  height: auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;

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

export const FooterLogo = styled(SiThemoviedatabase)`
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  width: 50px;
  height: 50px;
`;

export const TmdbLink = styled.a`
  &:hover {
    color: #c61212;
  }
`;
