import { Link, useLocation } from 'react-router-dom';
import { MovieCardItem } from './MovieCard.styled';
import { MovieTitle } from './MovieCard.styled';
import { MovieImg } from './MovieCard.styled';
import { noImage } from 'images/noImage';
import PropTypes from 'prop-types';
const MovieCard = ({ movies }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    movies && (
      <>
        {movies.map(({ id, poster_path, name, title, overview }) => {
          let movieName = name ?? title;

          const imgSrc = !poster_path ? noImage : imageUrl + poster_path;

          const idToString = id.toString();
          return (
            <MovieCardItem key={id}>
              <Link
                to={
                  location.pathname === '/movies'
                    ? `${idToString}`
                    : `movies/${idToString}`
                }
                state={{ from: location }}
              >
                <MovieImg width="200" src={imgSrc} alt={name} loading="lazy" />
                <MovieTitle>{movieName}</MovieTitle>
              </Link>
            </MovieCardItem>
          );
        })}
      </>
    )
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
