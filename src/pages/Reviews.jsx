import useFetchReviews from 'Hooks/useFetchReviews';

const Reviews = () => {
  const reviews = useFetchReviews();
  return (
    reviews &&
    (reviews.results.length === 0 ? (
      <p>There is no reviews yet!</p>
    ) : (
      <ul>
        {reviews.results.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    ))
  );
};

export default Reviews;
