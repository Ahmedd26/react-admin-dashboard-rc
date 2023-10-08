import DarkModeReducer from "./darkModeReducer";

const { createContext, useReducer } = require("react");

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE, () => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const initialDarkMode = storedDarkMode
      ? JSON.parse(storedDarkMode)
      : INITIAL_STATE.darkMode;
    return { darkMode: initialDarkMode };
  });
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
