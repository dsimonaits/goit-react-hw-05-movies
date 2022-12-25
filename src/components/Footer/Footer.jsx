import {
  FooterStyled,
  FooterLogo,
  FooterContainer,
  TmdbLink,
} from './Footer.styled';

function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <p>Copyright&#169; </p>
        <FooterLogo />
        <TmdbLink href="https://www.themoviedb.org/">
          www.themoviedb.org
        </TmdbLink>
      </FooterContainer>
    </FooterStyled>
  );
}

export default Footer;
