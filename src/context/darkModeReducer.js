const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      localStorage.setItem("darkMode", "false"); // Store the preference in localStorage
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      localStorage.setItem("darkMode", "true"); // Store the preference in localStorage
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      const newMode = !state.darkMode;
      localStorage.setItem("darkMode", String(newMode)); // Store the preference in localStorage
      return {
        darkMode: newMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
