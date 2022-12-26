import PropTypes from 'prop-types';
import {
  InfoList,
  InfoItems,
  Heading,
  InfoLink,
} from './AdditionalInfo.styled';

const AdditionaLInfo = ({ mainState }) => {
  return (
    <div>
      <Heading>Additional information</Heading>
      <InfoList>
        <InfoItems>
          <InfoLink to="cast" state={{ from: mainState }}>
            Cast
          </InfoLink>
        </InfoItems>
        <InfoItems>
          <InfoLink to="reviews" state={{ from: mainState }}>
            Reviews
          </InfoLink>
        </InfoItems>
      </InfoList>
    </div>
  );
};

export default AdditionaLInfo;

AdditionaLInfo.propTypes = {
  mainState: PropTypes.object.isRequired,
};
