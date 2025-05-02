import Logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="MyContacts" width="201" />
    </Container>
  );
}
