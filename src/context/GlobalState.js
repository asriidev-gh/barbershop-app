import React, { createContext, useReducer } from "react";

// Initial State
const initialState = {
  gender,
  error: null,
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
