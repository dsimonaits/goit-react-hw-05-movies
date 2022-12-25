import Container from 'components/Container/Container';
import {
  Logo,
  Nav,
  NavList,
  NavListItem,
  NavLinkStyled,
} from './NavBar.styled';

function NavBar() {
  return (
    <Container>
      <Nav>
        <Logo />
        <NavList>
          <NavListItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavListItem>
          <NavListItem>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavListItem>
        </NavList>
      </Nav>
    </Container>
  );
}

export default NavBar;
