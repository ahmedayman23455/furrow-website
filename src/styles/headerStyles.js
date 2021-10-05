import styled from 'styled-components';
import { motion } from 'framer-motion';

/* -------------------------------------------------------------------------- */
export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 90;
`;

export const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${(props) => props.theme.text};

  a {
    color: ${(props) => props.theme.text};
    user-select: none;
  }

  span {
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    background-color: ${(props) => props.theme.red};
    border-radius: 100vh;
    position: relative;
    right: 3px;
    bottom: 1px;
  }
`;

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 1.1em;
    background: none;
    outline: none;

    span {
      width: 2.3em;
      height: 0.5em;
      display: block;
      background-color: ${(props) => props.theme.text};
      margin: 8px;
    }
  }
`;
