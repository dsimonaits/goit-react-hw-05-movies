import { Link, useLocation } from 'react-router-dom';
import useFetchDetails from 'Hooks/useFetchDetails';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import { BsArrow90DegLeft } from 'react-icons/bs';

const MovieDetails = () => {
  const movieDetails = useFetchDetails();
  const location = useLocation();
  // const mainLocationState = location.state.from;
  const backLinkHref = location.state?.from ?? '/home';

  const backLinkStyle = {
    link: {
      display: 'inline-block',
      marginBottom: '10px',
    },
    logo: {
      marginRight: '5px',
    },
  };
  return (
    <Section>
      <Container>
        <Link to={backLinkHref} style={backLinkStyle.link}>
          <BsArrow90DegLeft style={backLinkStyle.logo} />
          Go Back
        </Link>
        {movieDetails && (
          <MovieDetailsCard movie={movieDetails} mainState={backLinkHref} />
        )}
      </Container>
    </Section>
  );
};

export default MovieDetails;
