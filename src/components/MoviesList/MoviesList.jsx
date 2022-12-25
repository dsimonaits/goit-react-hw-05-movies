import MovieCard from 'components/MovieCard/MovieCard';
import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyled>
      <MovieCard movies={movies} />
    </MoviesListStyled>
  );
};

export default MoviesList;
