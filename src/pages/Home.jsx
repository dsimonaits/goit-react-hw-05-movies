import * as moviesApi from '../services/movies-api';
import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = () =>
      moviesApi
        .fetchTrendingMovies()
        .then(({ results }) => setTrendingMovies(results))
        .catch(error => console.log(error))
        .finally();

    trendingMovies();
  }, []);

  return (
    <>
      <Section>
        <PageHeading text="Day`s Top" />
        <MoviesList movies={trendingMovies} />
      </Section>
    </>
  );
};

export default Home;
