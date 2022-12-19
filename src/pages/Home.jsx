import * as moviesApi from '../services/movies-api';
import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const fetchTrandingMovies = () =>
      moviesApi
        .fetchTrandingMovies()
        .then(({ results }) => setTrandingMovies(results))
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
};

export default Home;
