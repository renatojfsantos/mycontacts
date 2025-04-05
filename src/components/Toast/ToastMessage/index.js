import PropTypes from 'prop-types';

import XCircleIcon from '../../../assets/images/icons/x-circle.svg';
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg';

import { Container } from './styles';

export function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={XCircleIcon} alt="X" />}
      {type === 'success' && <img src={CheckCircleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
