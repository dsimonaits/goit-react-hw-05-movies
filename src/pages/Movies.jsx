import { useSearchParams } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as moviesApi from '../services/movies-api';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PageHeading from 'components/PageHeading/PageHeading';
import Btn from 'components/Btn/Btn';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

function Movies() {
  const [status, setStatus] = useState('idle');

  const [moviesByName, setMoviesByName] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setMoviesByName([]);

    const form = e.target;
    const value = form.elements.query.value;
    if (value.trim() === '') {
      return;
    }
    setSearchParams({ moviename: value });

    form.reset();
  };

  useEffect(() => {
    setStatus('idle');
    const query = searchParams.get('moviename');
    if (query === null || query === '') return;
    Loading.circle();
    moviesApi
      .fetchMovieByQuery(query, page)
      .then(({ results, total_pages: totalPages }) => {
        setTotalPages(totalPages);
        if (results.length === 0) {
          setStatus('rejected');
        } else {
          setStatus('pending');
        }

        setMoviesByName(prevState => {
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
      .finally(Loading.remove());
  }, [searchParams, page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const pageHeading = status => {
    let text = '';
    switch (status) {
      case 'idle':
        text = 'Looking for something special?';
        break;
      case 'rejected':
        text = 'Nothing matches your search!';
        break;
      case 'approved':
        text = 'Found something!';
        break;

      default:
        break;
    }
    return text;
  };

  return (
    <Section>
      <Container height="400px">
        <PageHeading text={pageHeading(status)} />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Write something..."
            required
            autoComplete="off"
          />
          <button
            style={{
              borderRadius: '5px',
              marginLeft: '5px',
              cursor: 'pointer',
              '&:hover': { color: 'red' },
            }}
          >
            Search
          </button>
        </form>
        {moviesByName && (
          <Suspense>
            <MoviesList movies={moviesByName} />
            {status === 'approved' && page !== totalPages && (
              <Btn text="Load more" onclickHandler={loadMore} />
            )}
          </Suspense>
        )}
      </Container>
    </Section>
  );
}

export default Movies;
