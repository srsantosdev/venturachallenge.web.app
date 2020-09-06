import React from 'react';

import { Container } from './styles';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <Container>
      <span>{name}</span>
    </Container>
  );
};

export default Footer;
