import { Input } from '../../components/Input';
import { PageHeader } from '../../components/PageHeader';
import { Select } from '../../components/Select';

export function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="0">Selecione o canal</option>
        <option value="1">E-mail</option>
        <option value="2">Telefone</option>
        <option value="3">WhatsApp</option>
        <option value="4">Facebook</option>
        <option value="5">Instagram</option>
        <option value="6">LinkedIn</option>
      </Select>
    </>
  );
}
