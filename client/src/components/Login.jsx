import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ContainerBG = styled.div`
  width: 50%;
  background: linear-gradient(to bottom right, #2ecc71, #007bff);
  height: 100%;
`;

const ContainerForm = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 20px;

  box-sizing: border-box;
`;

const FormContainer = styled.div`
  width: 80%;
  max-width: 400px;

  padding: 40px;
 
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: center;
`;

const FormField = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2ecc71;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #56d68b;
    transform: translateY(-2px);
  }
`;

const CreateAccountButton = styled.button`
  background: none;
  border: none;
  color: #2ecc71;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const LoginForm = () => {
  return (
    <Container>
      <ContainerBG />
      <ContainerForm>
        <FormContainer>
          <FormTitle>Fazer Login</FormTitle>

          <p>Faça login para acessar sua conta.</p>
          <br />
          <form>
            <FormField type="text" placeholder="CNPJ ou E-mail" required />
            <FormField type="password" placeholder="Senha" required />
            <SubmitButton type="submit">Entrar</SubmitButton>
          </form>
          <p>
          <br />
            Ainda não possui uma conta?{' '}
            <CreateAccountButton>Criar cadastro</CreateAccountButton>
          </p>
        </FormContainer>
      </ContainerForm>
    </Container>
  );
};

export default LoginForm;
