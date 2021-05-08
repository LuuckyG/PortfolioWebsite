import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p(props => ({
  maxWidth: props.limited ? '500px' : undefined,
  lineHeight: '1.7rem',
  margin: `1em 0`,
  color: `#333`,
}));

Text.propTypes = {
  limited: PropTypes.bool,
};

Text.defaultProps = {
  limited: false,
};

export default Text;
