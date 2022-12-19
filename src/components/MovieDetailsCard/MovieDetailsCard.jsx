const MovieDetailsCard = ({ movie }) => {
  console.log(movie);
  const { backdrop_path, original_title, popularity, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <div>
        <img src={imageUrl + backdrop_path}></img>
        <div>
          <h2>{original_title}</h2>
          <ul>
            <li>User Score: {popularity}</li>
            <li>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li>
              <h4>{movieGenres}</h4>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsCard;
