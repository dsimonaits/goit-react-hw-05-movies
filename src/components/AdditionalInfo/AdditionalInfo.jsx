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
