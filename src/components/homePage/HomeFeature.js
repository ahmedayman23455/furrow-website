import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Container, Flex } from '../../styles/globalStyles';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from '../../styles/homeStyles';

function HomeFeature({ onCursor }) {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-200px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <HomeFeaturedSection
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
      ref={contentRef}
      initial="hidden"
      animate={animation}
      transition={{ duration: 5 }}
    >
      <Container>
        <FeaturedContent
          onMouseEnter={() => {
            onCursor('hovered');
            setHovered((prevState) => !prevState);
          }}
          onMouseLeave={() => {
            onCursor();
            setHovered((prevState) => !prevState);
          }}
        >
          <Flex spaceBetween>
            <h3>Featured Project</h3>
            <motion.div
              className="meta"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ ease: 'easeInOut' }}
            >
              <h4>PEI Seafood</h4>
              <h4>2019</h4>
            </motion.div>
          </Flex>
          <h2 className="featured-title">
            Not <br />
            Humble
            <div className="arrow">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 57"
                animate={{ x: hovered ? 48 : 0 }}
                transition={{ ease: 'easeInOut' }}
              >
                <path
                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                  fill="#FFF"
                  fillRule="evenodd"
                ></path>
              </motion.svg>
            </div>
          </h2>
        </FeaturedContent>
        <FeaturedVideo>
          <video loop autoPlay src="./assets/video/featured-video.mp4" />
        </FeaturedVideo>
      </Container>

      <Container>
        <FeaturedProjects>
          <Flex flexEnd>
            <button>
              <span>All projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  );
}

export default HomeFeature;
