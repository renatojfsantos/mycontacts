import ContactsService from '../../services/ContactsService';

import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function NewContact() {
  async function handleSubmit(formData) {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.categoryId,
    };
    console.log('🚀 ~ handleSubmit ~ contact:', contact);

    try {
      const response = await ContactsService.createContact(contact);
      console.log('🚀 ~ handleSubmit ~ response:', response);
    } catch {}
  }

  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
