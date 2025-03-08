import { Button } from '../Button';
import { Overlay, Container, Footer } from './styles';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do modal</h1>
        <p>Conteúdo do modal</p>

        <Footer>
          <button
            type="button"
            className="cancel-button"
          >
            Cancelar
          </button>
          <Button type="button">
            Deletar
          </Button>
        </Footer>

      </Container>
    </Overlay>
  );
}
