import React, { useState, useEffect } from 'react';

//global styles
import { Cursor } from '../styles/globalStyles';

// context
import { useGlobalStateContext } from '../context/globalContext';

function CustomCursor({ toggleMenu }) {
  const { cursorType } = useGlobalStateContext();

  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  });

  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    // cleanup function
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        className={`${!!cursorType ? 'hovered' : ''}  ${cursorType} ${
          toggleMenu ? 'navOpen' : ''
        }`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
    </>
  );
}

export default CustomCursor;
