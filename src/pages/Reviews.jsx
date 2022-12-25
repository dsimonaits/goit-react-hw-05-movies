import useFetchReviews from 'Hooks/useFetchReviews';
import ReviewsList from 'components/ReviewsLIst/ReviewsList';

const Reviews = () => {
  const reviews = useFetchReviews();
  return (
    reviews &&
    (reviews.results.length === 0 ? (
      <p>There is no reviews yet!</p>
    ) : (
      <ReviewsList data={reviews} />
    ))
  );
};

export default Reviews;
