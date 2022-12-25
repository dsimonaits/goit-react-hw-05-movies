import { ReviewsItem } from './ReviewsList.styled';

const ReviewsList = ({ data }) => {
  return (
    <ul>
      <>
        {data.results.map(({ author, content, id }) => {
          return (
            <ReviewsItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ReviewsItem>
          );
        })}
      </>
    </ul>
  );
};
export default ReviewsList;
