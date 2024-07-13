import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OngsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  background-color: #49c1f9;
  padding: 2rem;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  gap: 50px;
`;

const OngCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;

const OngCard = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  margin: 1.5rem;
  background-color: #211e1e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover div:last-child {
    height: 100%;
    opacity: 1;
  }
`;

const OngImageContainer = styled.div`
  height: 60%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OngLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OngInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  padding: 1rem;
  border-radius: 0 0 15px 15px;
  text-align: center;
  transition: height 0.3s, opacity 0.3s;
  opacity: 0;
`;

const OngName = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  color: #ffffff;
`;

const OngDescription = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #ffffff;
`;
const Subtitle = styled.p`
  
  font-size: 35px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

`;

const DonateButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  background-color: #fc2008;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d11807;
  }
`;

function Ongs() {
  const ongs = [
    { id: 1, name: 'Instituto PROA', logo: '../proa.png', link: '/ong1', text: 'Instituto PROA é uma ONG voltada para...', text1: 'Ajudar jovens periféricos a entrarem no mercado de trabalho' },
    { id: 2, name: 'ONG 2', logo: '../greenpeace.jpg', link: '', text: 'Descrição da ONG 2', text1: 'Mais detalhes sobre a ONG 2' },
    { id: 3, name: 'ONG 3', logo: '../casa-ronald_5d2dc963.webp', link: '/ong3', text: 'Descrição da ONG 3', text1: 'Mais detalhes sobre a ONG 3' },
    { id: 4, name: 'ONG 4', logo: '../cruzvermelha.jpg', link: '/ong4', text: 'Descrição da ONG 4', text1: 'Mais detalhes sobre a ONG 4' },
    // { id: 5, name: 'ONG 5', logo: 'logo5.png', link: '/ong5', text: 'Descrição da ONG 5', text1: 'Mais detalhes sobre a ONG 5' },
    // { id: 6, name: 'ONG 6', logo: 'logo6.png', link: '/ong6', text: 'Descrição da ONG 6', text1: 'Mais detalhes sobre a ONG 6' },
    // { id: 7, name: 'ONG 7', logo: 'logo7.png', link: '/ong7', text: 'Descrição da ONG 7', text1: 'Mais detalhes sobre a ONG 7' },
    // { id: 8, name: 'ONG 8', logo: 'logo8.png', link: '/ong8', text: 'Descrição da ONG 8', text1: 'Mais detalhes sobre a ONG 8' },
  ];

  return (
    <OngsSection>
          <Subtitle>Ongs para doar</Subtitle>
      <OngCarousel>
        {ongs.map(ong => (
          <OngCard key={ong.id}>
            <OngImageContainer>
              <OngLogo src={ong.logo} alt={`${ong.name} Logo`} />
            </OngImageContainer>
            <OngDescription>{ong.text}</OngDescription>
            <OngInfo>
              <OngName>{ong.name}</OngName>
              <OngDescription>{ong.text1}</OngDescription>
              <DonateButton to={ong.link}>Doe</DonateButton>
            </OngInfo>
          </OngCard>
        ))}
      </OngCarousel>
    </OngsSection>
  );
}

export default Ongs;
