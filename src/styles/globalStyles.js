import styled, { css } from 'styled-components';

/* -------------------------------------------------------------------------- */
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 2em;
  width: auto;
  height: 100%;
  position: relative;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1488px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}
`;
/* -------------------------------------------------------------------------- */
export const Flex = styled.div`
  /* position: relative; */
  display: flex;

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
/* -------------------------------------------------------------------------- */
export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  border-radius: 100vh;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.red};
  transition: all 0.1s ease-in-out;
  transition-property: height, width, border;
  will-change: height, width, border, transform;
  pointer-events: none;
  z-index: 9999;

  &.hovered {
    background: transparent !important;
    width: 3em;
    height: 3em;
    border: 4px solid ${(props) => props.theme.red};
  }

  &.pointer {
    border: 4px solid ${(props) => props.theme.text};
    width: 2.5em;
    height: 2.5em;
  }

  &.navOpen {
    background-color: ${(props) => props.theme.text};
  }

  &.locked {
    background: transparent !important;
    width: 3em;
    height: 3em;
    border: 4px solid ${(props) => props.theme.red};
    top: ${(props) => props.theme.top} !important;
    left: ${(props) => props.theme.left} !important;
  }
`;
/* -------------------------------------------------------------------------- */
