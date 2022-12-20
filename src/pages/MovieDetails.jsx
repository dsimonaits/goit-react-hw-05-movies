import { NavLink, Outlet } from 'react-router-dom';
import useFetchDetails from 'Hooks/useFetchDetails';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

const MovieDetails = () => {
  const movieDetails = useFetchDetails();
  return (
    <>
      {movieDetails && <MovieDetailsCard movie={movieDetails} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
