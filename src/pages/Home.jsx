import * as moviesApi from '../services/movies-api';
import { useState, useEffect } from 'react';
import Section from 'components/Section/Section';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from 'components/MoviesList/MoviesList';
import Container from 'components/Container/Container';
import Btn from 'components/Btn/Btn';
// import { useRef } from 'react';

const Home = () => {
  const [status, setStatus] = useState('idle');
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [page, setPage] = useState(1);

  // const isFirstRender = useRef(true);

  useEffect(() => {
    setStatus('idle');
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    const trendingMoviesFetch = () => Loading.circle();
    moviesApi
      .fetchTrendingMovies(page)
      .then(({ results }) => {
        if (results.length === 0) {
          setStatus('rejected');
        } else {
          setStatus('pending');
        }

        setTrendingMovies(prevState => {
          const filteredResult = [];
          const stateMoviesId = prevState.map(obj => obj.id);
          results.map(result => {
            if (!stateMoviesId.includes(result.id)) {
              filteredResult.push(result);
            }
            setStatus('approved');
            return filteredResult;
          });

          return [...prevState, ...filteredResult];
        });
      })
      .catch(error => console.log(error))
      .finally();

    trendingMoviesFetch();
    Loading.remove();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Section>
      <Container>
        <PageHeading text="Day`s Top" />
        {trendingMovies && (
          <>
            <MoviesList movies={trendingMovies} />
            {status === 'approved' && (
              <Btn text="Load more" onclickHandler={loadMore} />
            )}
          </>
        )}
      </Container>
    </Section>
  );
};

export default Home;
