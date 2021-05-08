import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../utils/theme';

const Button = styled.button`
  transition: all 0.15s ease-in-out;
  font-size: 0.9rem;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.15rem;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 25px;
  background-image: ${props =>
    `linear-gradient(-45deg, ${theme.colors.darkgreen}, ${theme.colors.lightgreen})`};
  color: ${theme.colors.white};
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
  animation: fadeInUp 2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.065, 1.065);
  }

  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

Button.propTypes = {
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
};

export default Button;
