import useFetchCast from 'Hooks/useFetchCast';

const Cast = () => {
  const credits = useFetchCast();
  console.log(credits);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    credits && (
      <ul>
        {credits.cast.map(({ profile_path, name, character }) => {
          return (
            <>
              <li key={credits.id}>
                <img src={imageUrl + profile_path} alt={name} width="200"></img>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            </>
          );
        })}
      </ul>
    )
  );
};
export default Cast;
