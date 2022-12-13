import { PropTypes } from 'prop-types';
import { Container } from './Section.styled';

const Section = ({ children }) => {
  return <Container>{children}</Container>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Section;
