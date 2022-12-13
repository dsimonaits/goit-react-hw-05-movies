import * as moviesApi from '../services/movies-api';
import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const fetchTrandingMovies = () =>
      moviesApi
        .fetchTrandingMovies()
        .then(({ data: { results } }) => setTrandingMovies(results))
        .catch(error => console.log(error))
        .finally();

    fetchTrandingMovies();
  }, []);

  return (
    <>
      <Section>
        <PageHeading text="Day`s Top" />
        <MoviesList movies={trandingMovies} />
      </Section>
    </>
  );
}
