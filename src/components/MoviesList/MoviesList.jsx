import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard/MovieCard';
import { MoviesListStyled } from './MoviesList.styled';
// import Btn from 'components/Btn/Btn';

const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyled>
      <MovieCard movies={movies} />
      {/* <Btn text="Load more" /> */}
    </MoviesListStyled>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
