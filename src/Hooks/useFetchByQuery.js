import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/movies-api';

const useFetchMoviesByName = () => {
  const [movies, setMovies] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('moviename');

  useEffect(() => {
    if (query === null || query === '') return;

    fetchMovieByQuery(query).then(setMovies);
  }, [query]);

  return movies;
};

export default useFetchMoviesByName;
