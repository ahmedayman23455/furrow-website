import React, { useEffect, useState } from 'react';
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from '../../styles/homeStyles';

import { Container, Flex } from '../../styles/globalStyles';

import { motion } from 'framer-motion';

import { useGlobalStateContext } from '../../context/globalContext';

import { useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: 'Pre-Production',
    results: [
      'Creative Development',
      'Writing',
      'Creative Development',
      'Writing',
      'Storyboards',
      'Art Direction',
      'Creative Direction',
      'Location Scouting',
      'Casting',
    ],
  },
  {
    id: 1,
    title: 'Video Production',
    results: [
      'Principle Photography',
      'Production Management',
      'Crew',
      'Dailies',
      'LTO-Archiving',
    ],
  },
  {
    id: 2,
    title: 'Post-Production',
    results: [
      'Colour correction',
      'Offline editing',
      'Online editing',
      'VFX',
      'Animation and motion graphics',
      'Closed captioning and subtitles',
      'Descriptive video',
      'Dailies',
      'Quality control',
      'LTO Archiving',
    ],
  },
  {
    id: 3,
    title: 'Audio Post-Production',
    results: [
      'We work with some amazing partners who provide:',
      'Sound Design',
      'SFX',
      'Music',
      'Sound Mix',
    ],
  },
];

function HomeAbout({ onCursor }) {
  const [expanded, setExpanded] = useState(0);
  const { currentTheme } = useGlobalStateContext();

  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <HomeAboutSection
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, 0.05, -0.1, 0.9],
          },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
      initial="hidden"
      animate={animation}
      ref={aboutRef}
    >
      <Container>
        <Flex>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>

            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
                currentTheme={currentTheme}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
}

export default HomeAbout;

const Accordion = ({
  details,
  expanded,
  setExpanded,
  onCursor,
  currentTheme,
}) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  console.log(onCursor, 'Accordion');
  return (
    <>
      <AccordionHeader
        onClick={() => {
          setExpanded(isOpen ? false : details.id);
        }}
        onMouseEnter={() => {
          onCursor('hovered');
          setHovered((prevState) => !prevState);
        }}
        onMouseLeave={() => {
          onCursor();
          setHovered((prevState) => !prevState);
        }}
        whileHover={{
          color: currentTheme === 'dark' ? '#ffffff' : '#000000',
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? 'auto' : '0' }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};
