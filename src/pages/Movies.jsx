import { useSearchParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import useFetchMoviesByName from 'Hooks/useFetchByQuery';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PageHeading from 'components/PageHeading/PageHeading';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

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

  const noData = data && data.results.length === 0;

  return (
    <Section>
      <Container height="400px">
        {data ? (
          noData ? (
            <PageHeading text="Nothing matches your search!" />
          ) : (
            <PageHeading text="Found something!" />
          )
        ) : (
          <PageHeading text="Looking for something special?" />
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Write something..."
            required
            autoComplete="off"
          />
          <button>Search</button>
        </form>
        {data && (
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesList movies={data.results} />
          </Suspense>
        )}
      </Container>
    </Section>
  );
}

export default Movies;
