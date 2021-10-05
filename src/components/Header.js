import React, { useEffect, useRef } from 'react';

// styled components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles';

import { Container, Flex } from '../styles/globalStyles';

// react router
import { Link } from 'react-router-dom';

//contxt
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';

// custom hook
import useElementPosition from '../hooks/useElementPosition';

/* -------------------------------------------------------------------------- */
function Header({
  onCursor,
  toggleMenu,
  setToggleMenu,
  hamburgerPosition,
  setHamburgerPosition,
}) {
  const hamburger = useRef(null);
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const position = useElementPosition(hamburger);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleThemeHandler = () => {
    if (currentTheme === 'light') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    }
  };

  const menuHover = () => {
    onCursor('locked');
    setHamburgerPosition({ x: position.x, y: position.y + 72 });
  };

  return (
    <HeaderNav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -72 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight alignCenter>
          <Logo
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={() => onCursor()}
          >
            <Link to="/">FURR </Link>
            <span
              onClick={toggleThemeHandler}
              onMouseEnter={() => onCursor('pointer')}
              onMouseLeave={() => onCursor()}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
            onClick={() => setToggleMenu(true)}
          >
            <button>
              <span> </span>
              <span> </span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
}

export default Header;
