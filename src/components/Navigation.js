import React, { useState } from 'react';

import { FooterContent, FooterSocial } from '../styles/footerStyles';
// icons
import { Facebook, Instagram, Vimeo } from '../components/svg/social-icons';

import {
  Nav,
  NavHeader,
  NavLink,
  NavList,
  ListItem,
  FooterNav,
  CloseNav,
  NavVideos,
} from '../styles/navigationStyles';
// global styles
import { Container, Flex } from '../styles/globalStyles';

// framermotion
import { motion, AnimatePresence } from 'framer-motion';

// videoos
import video from '../assets/video/video.mp4';
import projects from '../assets/video/projects.mp4';
import makeItZero from '../assets/video/make-it-zero.mp4';
import itTakesAnIsland from '../assets/video/it-takes-an-island.mp4';
import featuredVideo from '../assets/video/featured-video.mp4';
import easy from '../assets/video/easy.mp4';
import beaches50 from '../assets/video/50-beaches.mp4';

const navRoutes = [
  {
    id: 0,
    title: 'not humble',
    path: '/not-humble',
    video: featuredVideo,
  },
  {
    id: 1,
    title: 'bleeping easy',
    path: '/bleeping-easy',
    video: easy,
  },
  {
    id: 2,
    title: 'make it zero',
    path: '/make-it-zero',
    video: makeItZero,
  },
  {
    id: 3,
    title: 'it takes an island',
    path: '/it-takes-an-island',
    video: itTakesAnIsland,
  },
  {
    id: 4,
    title: '50 beaches',
    path: '/50-beaches',
    video: beaches50,
  },
];

function Navigation({ toggleMenu, setToggleMenu, onCursor }) {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: featuredVideo,
    key: '0',
  });

  // console.log(revealVideo);

  const variants = {
    initial: {
      x: '-100%',
    },
    animate: {
      x: 0,
    },
    exit: {
      x: '-100%',
    },
  };

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              damping: 300,
              duration: 0.4,
              ease: [0.27, 0.5, 0.75, 0.655],
            }}
          >
            <Container>
              <NavHeader>
                {/* header */}
                <Flex noHeight spaceBetween>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(false)}
                    onMouseEnter={() => onCursor('pointer')}
                    onMouseLeave={() => onCursor()}
                  >
                    <span> </span>
                    <span> </span>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <Flex column fullHeight justifyCenter>
                {/* navlist */}
                <NavList>
                  {navRoutes.map((item) => {
                    return (
                      <NavLink
                        to={item.path}
                        key={item.id}
                        onMouseOver={() => {
                          setRevealVideo({
                            video: item.video,
                            key: item.id,
                            show: true,
                          });
                          onCursor('pointer');
                        }}
                        onMouseOut={() => {
                          setRevealVideo({
                            video: item.video,
                            key: item.id,
                            show: false,
                          });
                          onCursor();
                        }}
                      >
                        <ListItem
                          initial={{ x: -72 }}
                          whileHover={{
                            x: -20,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 101 57"
                          >
                            <path
                              d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                              fill="#FFF"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                          {item.title}
                        </ListItem>
                      </NavLink>
                    );
                  })}
                </NavList>

                {/* footer */}
                <FooterNav>
                  <Container>
                    <Flex spaceBetween>
                      <FooterContent>
                        <p>902.315.1279</p>
                        <p>info@furrow.studio</p>
                      </FooterContent>
                      <FooterContent wider>
                        <p>15 Camburhill Ct Unit C</p>
                        <p>Charlottetown, PE C1E 0E2</p>
                      </FooterContent>
                      <FooterSocial>
                        <a
                          href="/"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={() => onCursor()}
                        >
                          <Instagram />
                        </a>
                        <a
                          href="/"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={() => onCursor()}
                        >
                          <Facebook />
                        </a>
                        <a
                          href="/"
                          onMouseEnter={() => onCursor('pointer')}
                          onMouseLeave={() => onCursor()}
                        >
                          <Vimeo />
                        </a>
                      </FooterSocial>
                    </Flex>
                  </Container>
                </FooterNav>
              </Flex>
            </Container>

            {/* nav video */}
            <NavVideos>
              <motion.div
                className="reveal"
                initial={{ width: '100%' }}
                animate={revealVideo.show ? { width: 0 } : { width: '100%' }}
                transition={{ damping: 300, duration: 0.5 }}
              ></motion.div>
              <div className="video">
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.video
                    key={revealVideo.key}
                    src={revealVideo.video}
                    // src={}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18, ease: 'easeInOut' }}
                    autoPlay
                    loop
                  ></motion.video>
                </AnimatePresence>
              </div>
            </NavVideos>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;

/* 
Animate presense  => determine when a component should unmount versus mount based on 
its key so the key is difference it would allow us to run an exit animation 
*/
//تحديد متى يجب إلغاء تحميل أحد المكونات مقابل التحميل استنادًا إلى مفتاحه بحيث يكون المفتاح هو الاختلاف

/*  Animate presens => will depend on revealVideo.key , becaue everyTime we update state 
  we are updating it with a new key and the new video 
*/
