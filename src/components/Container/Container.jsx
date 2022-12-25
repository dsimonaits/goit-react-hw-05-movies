import { PropTypes } from 'prop-types';
import { ContainerStyled } from './Container.styled';

const Container = ({ height, children }) => {
  return <ContainerStyled height={height}>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Container;
