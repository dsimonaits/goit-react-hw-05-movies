// import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchMoviesByName from 'Hooks/useFetchByQuery';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
  /* eslint-disable */
  const [_, setSearchParams] = useSearchParams();
  /* eslint-enable */

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.query.value;
    if (value.trim() === '') {
      return;
    }
    setSearchParams({ moviename: value });

    form.reset();
  };

  const data = useFetchMoviesByName();
  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      {data &&
        (data.results.length === 0 ? (
          <p>Nothing here matches your search !</p>
        ) : (
          <MoviesList movies={data.results} />
        ))}
    </>
  );
}

export default Movies;
