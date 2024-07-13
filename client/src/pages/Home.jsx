import React from 'react';
import styled, { css } from 'styled-components';
import Carousel from '../components/Carousel.jsx';
import Ongs from '../components/Ongs.jsx';

const HomeContainer = styled.div`
  text-align: center;
  font-family: 'Arial, sans-serif';
  display: flex;
   align-items: center;
   flex-direction: column;
   width: 100vw;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  ${({ bgColor, textColor }) => css`
    background-color: ${bgColor || 'white'};
    color: ${textColor || 'black'};
  `}
`;

const SectionCarousel = styled.section`

display: flex;
align-items: center;
justify-content: center;

`


const SectionOngs = styled.section`


`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const PlanContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PlanCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 300px;
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 300px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 300px;
  height: 100px;
`;

const Button = styled.button`
  padding: 0.7rem 2rem;
  background-color: #61dafb;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;

  &:hover {
    background-color: #21a1f1;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <SectionCarousel id="about">
        <Carousel />
      </SectionCarousel>
      <Section id="project" bgColor="#f9f9f9">
        <Subtitle>Sobre o Projeto</Subtitle>
        <Paragraph>Nossa plataforma visa conectar empresas com ONGs que precisam de doações.</Paragraph>
        <Paragraph>Facilitamos a comunicação e o processo de doação para maximizar o impacto social.</Paragraph>
        <Paragraph>As empresas podem encontrar ONGs de acordo com seus valores e áreas de interesse.</Paragraph>
      </Section>
      <SectionOngs id="how-it-works">
      
        
        <Ongs/>
      </SectionOngs>
      <Section id="benefits" bgColor="#f9f9f9">
        <Subtitle>Benefícios</Subtitle>
        <Paragraph>Para Empresas: Maior visibilidade e impacto social, além de benefícios fiscais.</Paragraph>
        <Paragraph>Para ONGs: Acesso a recursos financeiros e materiais necessários para continuar seu trabalho.</Paragraph>
        <Paragraph>Para a Sociedade: Um mundo melhor com mais colaboração e apoio às causas importantes.</Paragraph>
      </Section>
      <Section id="plans">
        <Subtitle>Planos</Subtitle>
        <PlanContainer>
          <PlanCard>
            <PlanTitle>Plano Básico</PlanTitle>
            <PlanPrice>Gratuito</PlanPrice>
            <Paragraph>Acesso básico à plataforma.</Paragraph>
            <Paragraph>Perfil de empresa.</Paragraph>
            <Paragraph>Busca de ONGs.</Paragraph>
          </PlanCard>
          <PlanCard>
            <PlanTitle>Plano Premium</PlanTitle>
            <PlanPrice>R$ 99/mês</PlanPrice>
            <Paragraph>Todos os recursos do Plano Básico.</Paragraph>
            <Paragraph>Suporte prioritário.</Paragraph>
            <Paragraph>Relatórios detalhados de impacto.</Paragraph>
          </PlanCard>
          <PlanCard>
            <PlanTitle>Plano Empresarial</PlanTitle>
            <PlanPrice>R$ 299/mês</PlanPrice>
            <Paragraph>Todos os recursos do Plano Premium.</Paragraph>
            <Paragraph>Consultoria personalizada.</Paragraph>
            <Paragraph>Integração com sistemas internos.</Paragraph>
          </PlanCard>
        </PlanContainer>
      </Section>
      <Section id="contact" bgColor="#f9f9f9">
        <Subtitle>Contato</Subtitle>
        <ContactForm>
          <Input type="text" placeholder="Seu Nome" />
          <Input type="email" placeholder="Seu Email" />
          <Textarea placeholder="Sua Mensagem" />
          <Button type="submit">Enviar</Button>
        </ContactForm>
      </Section>
    </HomeContainer>
  );
}

export default Home;
