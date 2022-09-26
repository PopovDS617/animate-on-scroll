import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import TextSection from './TextSection';
import ImageSection from './ImageSection';

const HomePage = () => {
  return (
    <main className="main-container">
      <div>
        <TextSection
          classNameSection="scroll-ref-div"
          className="scroll-div"
          delay="2.1"
          moveDirection="Y(-30vh)"
        >
          {`c'mon scroll`}
        </TextSection>
        <div className="kenobi">
          <ImageSection
            delay="2"
            classNameSection="ref-div-img"
            className="image-container"
            moveDirection="Y(10vh)"
          >
            <Image
              src="/images/kenobi.png"
              width={800}
              height={800}
              alt="kenobi pic"
            />
          </ImageSection>

          <TextSection
            classNameSection="ref-div"
            className="obk"
            delay="1"
            moveDirection="X(-100vw)"
          >
            Hello
          </TextSection>
          <TextSection
            classNameSection="ref-div"
            className="obk"
            delay="1.3"
            moveDirection="X(120vw)"
          >
            There!
          </TextSection>
        </div>
      </div>
      <ImageSection
        delay="3"
        classNameSection="ref-div-img"
        className="image-container"
        moveDirection="Y(-35vh)"
      >
        <Image
          src="/images/grievous.png"
          width={800}
          height={800}
          alt="grievous pic"
        />
      </ImageSection>

      <TextSection
        classNameSection="ref-div"
        className="gg"
        delay="1"
        moveDirection="X(-100vw)"
      >
        General
      </TextSection>
      <TextSection
        classNameSection="ref-div"
        className="gg"
        delay="1.3"
        moveDirection="X(120vw)"
      >
        Kenobi!
      </TextSection>
    </main>
  );
};

export default HomePage;
