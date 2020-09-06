import React, { useState, useCallback, FormEvent } from 'react';
import { FiMail } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const Identifier: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      localStorage.setItem('@watch:email', email);

      history.push('/video');
    },
    [history, email],
  );

  return (
    <Container>
      <Header />

      <Content>
        <form onSubmit={handleSubmit}>
          <Input
            name="e-mail"
            type="email"
            placeholder="E-mail"
            icon={FiMail}
            onChange={event => setEmail(event.target.value)}
          />

          <button type="submit">Assistir</button>
        </form>
      </Content>

      <Footer name="Samuel Ramos dos Santos" />
    </Container>
  );
};

export default Identifier;
