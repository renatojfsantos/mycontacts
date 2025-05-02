import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar Renato José"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
