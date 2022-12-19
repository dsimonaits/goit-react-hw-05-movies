import { Link } from 'react-router-dom';

const MovieCard = ({ movies }) => {
  const imagesUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      {movies.map(
        ({ id, poster_path: image, original_title: title, overview }) => {
          const idToString = id.toString();
          return (
            <Link key={id} to={`movies/${idToString}`}>
              <h2>{title}</h2>
              {/* <img src={imagesUrl + image} alt={title} /> */}
              {/* <p>{overview}</p> */}
            </Link>
          );
        }
      )}
    </>
  );
};

export default MovieCard;
