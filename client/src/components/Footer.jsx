import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: #61dafb;
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #21a1f1;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Minha Aplicação. Todos os direitos reservados.</FooterText>
      <FooterLinks>
        <FooterLink href="#about">Sobre</FooterLink>
        <FooterLink href="#plans">Planos</FooterLink>
        <FooterLink href="#contact">Contato</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
