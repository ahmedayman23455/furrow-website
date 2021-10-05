import { createContext, useReducer, useContext } from 'react';

// define the context
const GlobalStateContext = createContext();
const GlobalDispatchCotext = createContext();

// Reducer

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }

    case 'CURSOR_TYPE': {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }

    default: {
      throw new Error(`unhandled action type: ${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      localStorage.getItem('theme') === null
        ? 'dark'
        : localStorage.getItem('theme'),
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked'],
  });

  return (
    <GlobalDispatchCotext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchCotext.Provider>
  );
};

// custom hooks to use dispatch and state
export const useGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};
export const useGlobalDispatchContext = () => {
  return useContext(GlobalDispatchCotext);
};
