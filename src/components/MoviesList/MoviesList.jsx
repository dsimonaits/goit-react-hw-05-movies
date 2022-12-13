import MovieCard from 'components/MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      <MovieCard movies={movies} />
    </ul>
  );
};

export default MoviesList;
