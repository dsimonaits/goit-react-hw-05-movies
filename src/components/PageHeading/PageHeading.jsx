import PropTypes from 'prop-types';
import { HeadingH1 } from './PageHeading.styled';

const PageHeading = ({ text }) => {
  return <HeadingH1>{text}</HeadingH1>;
};

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeading;
