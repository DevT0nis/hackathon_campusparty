import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  background-color: #61dafb;
  color: #282c34;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Minha Aplicação</Logo>
      <ButtonContainer>
        <Button >Cadastre-se como Empresa</Button>
        <Button >Cadastre-se como ONG</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
