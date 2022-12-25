import { Link, useLocation } from 'react-router-dom';
import { MovieCardItem } from './MovieCard.styled';
import { MovieTitle } from './MovieCard.styled';
import { MovieImg } from './MovieCard.styled';
import { noImage } from 'images/noImage';

const MovieCard = ({ movies }) => {
  const location = useLocation();
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    movies && (
      <>
        {movies.map(({ id, poster_path, name, title, overview }) => {
          let movieName = name ?? title;
          // if (movieName.length > 19) {
          //   movieName = movieName.substring(0, 19) + '...';
          // }

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
                <MovieImg
                  width="200"
                  src={!poster_path ? noImage : imageUrl + poster_path}
                  alt={name}
                />
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
