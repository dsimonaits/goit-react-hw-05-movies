import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import useFetchDetails from 'Hooks/useFetchDetails';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

const MovieDetails = () => {
  const movieDetails = useFetchDetails();
  const location = useLocation();
  const mainLocationState = location.state.from;
  const backLinkHref = location.state?.from ?? '/home';
  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      {movieDetails && <MovieDetailsCard movie={movieDetails} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: mainLocationState }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: mainLocationState }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
