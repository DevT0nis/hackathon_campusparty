import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;

const Image = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  align-items: center;
`;

const TextOverlay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  color: white;
  background-color: #2b2d2e56;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 40px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CustomCarousel = styled(Carousel)`
  .control-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .dot {
    background-color: rgba(255, 255, 255, 0.6);
    width: 12px;
    height: 12px;
    margin: 0 8px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.selected {
      background-color: white;
    }
  }

  .carousel-slider {
    transition: transform 0.5s ease;
  }

  .carousel .control-prev.control-arrow,
  .carousel .control-next.control-arrow {
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: white;
    opacity: 0.75;
    z-index: 1;
  }
`;

const MoreInfoButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  border-radius: 20px;
  background-color: #ff6600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4500;
  }
`;

const textAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [currentSlide, controls]);

  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        onChange={(index) => {
          controls.start('hidden').then(() => {
            setCurrentSlide(index);
          });
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <FaArrowCircleLeft
              onClick={onClickHandler}
              style={{ left: 15, top: '30%' }}
              className="control-prev control-arrow"
              aria-label={label}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <FaArrowCircleRight
              onClick={onClickHandler}
              style={{ right: 15, top: '30%' }}
              className="control-next control-arrow"
              aria-label={label}
            />
          )
        }
      >
        <Slide>
          <Image src="https://img.freepik.com/free-photo/people-happy-support-stacking-community_1150-1689.jpg?t=st=1720843581~exp=1720847181~hmac=df45047fc361f0862a0b8b2035e485a19329a959cd5fbaecaa08afb7787adef5&w=1380" alt="Slide 1" />
          <TextOverlay
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
            variants={textAnimation}
          >
            Doar é acreditar que a transformação é possível
            <MoreInfoButton>Saiba mais</MoreInfoButton>
          </TextOverlay>
        </Slide>
        <Slide>
          <Image src="https://img.freepik.com/free-photo/different-people-doing-volunteer-work-with-food_23-2149012168.jpg?t=st=1720843497~exp=1720847097~hmac=7a2ceb48bbd01ef48f29e3f116654edc7d1395a50869b2ddb0f4ccc3a49f8d00&w=1380" alt="Slide 2" />
          <TextOverlay
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
            variants={textAnimation}
          >
            Conheça as diretrizes do Movimento
            <MoreInfoButton>Saiba mais</MoreInfoButton>
          </TextOverlay>
        </Slide>
        <Slide>
          <Image src="https://img.freepik.com/free-photo/kids-soccer-players-huddling-celebrating-victory-together_23-2150821494.jpg?t=st=1720843550~exp=1720847150~hmac=fe29bfd9cb09fc9f5dc6eca4e6c6f5ea90e646ad9d2e3eade69d898ecf17c637&w=826" alt="Slide 3" />
          <TextOverlay
            initial="hidden"
            animate={controls}
            transition={{ duration: 1 }}
            variants={textAnimation}
          >
            Texto do Slide 3
            <MoreInfoButton>Saiba mais</MoreInfoButton>
          </TextOverlay>
        </Slide>
      </CustomCarousel>
    </CarouselContainer>
  );
};

export default CarouselComponent;
