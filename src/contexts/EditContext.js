import { createContext, useContext, useEffect } from "react";

export const EditContext = createContext(null);

export const EditProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <EditContext.Provider value={{}}>{children}</EditContext.Provider>;
};

export const useEditContext = () => useContext(EditContext);

// Do I want to do it as a context or s a route?

// I should do a route... so that the id determines what thing is being accessed, this way it doesn't have to be accessed by the navigate...
// Maybe a combination of the two

// Container, let's forget about that for right now...
