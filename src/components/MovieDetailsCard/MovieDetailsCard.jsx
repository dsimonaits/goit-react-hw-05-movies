const MovieDetailsCard = ({ movie }) => {
  const { poster_path, original_title, popularity, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <div>
        <img
          src={imageUrl + poster_path}
          alt={original_title}
          width="300"
        ></img>
        <div>
          <h2>{original_title}</h2>
          <ul>
            <li>User Score: {popularity}</li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h4>Genres</h4>
              <p>{movieGenres}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsCard;
