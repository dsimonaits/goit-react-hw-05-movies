import useFetchCast from 'Hooks/useFetchCast';

const Cast = () => {
  const credits = useFetchCast();

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019';

  return (
    credits && (
      <ul>
        {credits.cast.map(({ profile_path, name, character, id }) => {
          const actorPhoto = !profile_path ? noImage : imageUrl + profile_path;
          return (
            <li key={id}>
              <img src={actorPhoto} alt={name} width="200"></img>
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};
export default Cast;
