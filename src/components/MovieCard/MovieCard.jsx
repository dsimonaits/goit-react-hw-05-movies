import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movies }) => {
  const location = useLocation();
  console.log(movies);

  const imagesUrl = 'https://image.tmdb.org/t/p/w500/';

  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019';
  return (
    movies && (
      <>
        {movies.map(({ id, poster_path, name, title, overview }) => {
          const idToString = id.toString();
          return (
            <Link
              key={id}
              to={
                location.pathname === '/movies'
                  ? `${idToString}`
                  : `movies/${idToString}`
              }
            >
              <h2>{name ?? title}</h2>
              <img
                width="200"
                src={!poster_path ? noImage : imagesUrl + poster_path}
                alt={name}
              />
            </Link>
          );
        })}
      </>
    )
  );
};

export default MovieCard;
