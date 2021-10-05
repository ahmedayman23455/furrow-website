import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.background};
  z-index: 99;
`;
export const NavHeader = styled.div`
  position: absolute;
  top: 40px;
  height: 0;
  width: 100%;
  z-index: 99;
  h2 {
    font-size: 1.6rem;
    font-weight: 800;
  }
  > div {
    flex: 1;
  }
`;

export const CloseNav = styled.button`
  transform-origin: center;
  border: none;
  padding: 1.1em;
  background: none;
  outline: none;

  span {
    width: 2.3em;
    height: 0.5em;
    display: block;
    background-color: ${(props) => props.theme.background};
    margin: 8px;
  }
`;

export const NavList = styled.div`
  list-style-type: none;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  /* margin-bottom: 2em; */
`;

export const ListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  line-height: 1.5;
  font-weight: 900;
  color: ${(props) => props.theme.background};

  svg {
    width: 60px;
    margin-right: 0.5em;

    path {
      fill: ${(props) => props.theme.background};
    }
  }
`;

export const FooterNav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0;
  p {
    color: ${(props) => props.theme.background};
  }
  svg path {
    fill: ${(props) => props.theme.background};
  }
`;

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 28%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    /* display: none; */
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`;
