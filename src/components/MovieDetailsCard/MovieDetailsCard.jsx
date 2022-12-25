import { noImage } from 'images/noImage';
import AdditionaLInfo from 'components/AdditionalInfo/AdditionalInfo';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  MovieIMg,
  MovieDetailsWrapper,
  Title,
  UserScore,
  OverviewList,
  OverviewItem,
} from './MovieDetailsCard.styled';

const MovieDetailsCard = ({ movie, mainState }) => {
  const { poster_path, original_title, vote_average, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <Wrapper>
        <MovieIMg
          src={!poster_path ? noImage : imageUrl + poster_path}
          alt={original_title}
          width="300px"
        ></MovieIMg>
        <MovieDetailsWrapper>
          <Title>{original_title}</Title>
          <UserScore>
            User Score: {Math.ceil(vote_average * 10) + '%'}
          </UserScore>
          <OverviewList>
            <OverviewItem>
              <h3>Overview</h3>
              <p>{overview}</p>
            </OverviewItem>
            <OverviewItem>
              <h4>Genres</h4>
              <p>{movieGenres}</p>
            </OverviewItem>
          </OverviewList>

          <AdditionaLInfo mainState={mainState} />
          <Outlet />
        </MovieDetailsWrapper>
      </Wrapper>
    </>
  );
};

export default MovieDetailsCard;
