import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [erros, setErros] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErros((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErros((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  console.log(erros);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
