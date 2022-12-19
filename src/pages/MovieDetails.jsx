import useFetchDetails from 'Hooks/useFetchDetails';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const movieDetails = useFetchDetails();
  return (
    <>
      {movieDetails && <MovieDetailsCard movie={movieDetails} />},
      <AdditionalInfo movie={movieDetails} />
    </>
  );
};

export default MovieDetails;
