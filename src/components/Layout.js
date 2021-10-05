import React, { useState } from 'react';

// styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import CustomCursor from './CustomCursor';

// components
import Header from './Header';

//contxt
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from '../context/globalContext';
import Navigation from './Navigation';

/* -------------------------------------------------------------------------- */
const GlobalStyle = createGlobalStyle`
    ${normalize}  

* {
  text-decoration: none; 
  // to remove cursor from window and show only custom cursor  
  cursor: none;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

body {   
    overflow-x: hidden; 
    overscroll-behavior: none;
    background-color: ${(props) => props.theme.background} ;  
    color: ${(props) => props.theme.text} ; 
    position: relative; 
}
`;
/* -------------------------------------------------------------------------- */
function Layout({ children }) {
  const { currentTheme, cursorStyles } = useGlobalStateContext();

  const [toggleMenu, setToggleMenu] = useState(false);
  const dispath = useGlobalDispatchContext();

  const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0 });

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };
  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e',
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispath({ type: 'CURSOR_TYPE', cursorType: cursorType });
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <CustomCursor toggleMenu={toggleMenu} />
      <main> {children}</main>
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Layout;
