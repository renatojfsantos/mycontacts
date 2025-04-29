import PropTypes from 'prop-types';

import XCircleIcon from '../../../assets/images/icons/x-circle.svg';
import CheckCircleIcon from '../../../assets/images/icons/check-circle.svg';

import { Container } from './styles';

export function ToastMessage({ message, onRemoveMessage }) {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container type={message.type} onClick={handleRemoveToast}>
      {message.type === 'danger' && <img src={XCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={CheckCircleIcon} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
