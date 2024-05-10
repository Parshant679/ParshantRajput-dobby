import { createContext, useState } from "react";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Parshant",
    email: "parshant",
    _id: "123",
  });
  const state = {
    User: [user, setUser],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
