import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50; /* Cor de fundo mais suave */
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center; /* Centraliza os itens horizontalmente */
  flex: 1; /* Para ocupar o espaço restante */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #66fcf1; /* Cor de destaque ao passar o mouse */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  background-color: #27ae60; /* Verde comum em temas de ONGs */
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2ecc71; /* Verde mais claro ao passar o mouse */
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Minha Aplicação</Logo>
      <NavLinks>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/sobre-nos">Sobre Nós</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/como-doar">Como Doar</NavLink>
      </NavLinks>
      <ButtonContainer>
        <Button to="/cadastro-empresa">Cadastre-se como Empresa</Button>
        <Button to="/cadastro-ong">Cadastre-se como ONG</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
