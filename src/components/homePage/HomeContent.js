import React, { useEffect } from 'react';

// react-intersection-observer
// know when the user has scroll to position and once they have will use the animation
import { useInView } from 'react-intersection-observer';

// framer-motion
// useAnimation to control the animation meaning we can start and stop the animation
import { useAnimation } from 'framer-motion';

// global styles
import { Container } from '../../styles/globalStyles';

// styles
import { HomeContentSection, Content } from '../../styles/homeStyles';

function HomeContent() {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <HomeContentSection
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
    >
      <Container>
        <Content>
          Great stories don’t just happen— <br />
          they need to be uncovered. And we dig deep to discover the great
          stories that lie just below the surface. Dirt under our fingernails
          and all.
        </Content>
      </Container>
    </HomeContentSection>
  );
}

export default HomeContent;
