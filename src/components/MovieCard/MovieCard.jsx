const MovieCard = ({ movies }) => {
  const imagesUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      {movies.map(
        ({ id, poster_path: image, original_title: title, overview }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>
              <img src={imagesUrl + image} alt={title} />
              <p>{overview}</p>
            </li>
          );
        }
      )}
    </>
  );
};

export default MovieCard;
