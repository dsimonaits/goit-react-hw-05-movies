import PropTypes from 'prop-types';
import { Heading } from './PageHeading.styled';

const PageHeading = ({ text }) => {
  return <Heading>{text}</Heading>;
};

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeading;
