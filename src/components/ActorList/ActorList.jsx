import { noImage } from 'images/noImage';
import { ActorListStyled, ActorLIstItem } from './ActorList.styled';
import PropTypes from 'prop-types';

const ActorList = ({ data }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ActorListStyled>
      <>
        {data.cast.map(({ profile_path, name, character, id }) => {
          const actorPhoto = !profile_path ? noImage : imageUrl + profile_path;
          return (
            <ActorLIstItem key={id}>
              <img src={actorPhoto} alt={name} width="100"></img>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </ActorLIstItem>
          );
        })}
        ;
      </>
    </ActorListStyled>
  );
};
export default ActorList;

ActorList.propTypes = {
  data: PropTypes.object.isRequired,
};
