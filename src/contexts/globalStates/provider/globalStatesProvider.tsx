import React from "react";

import GlobalStatesContext from "../context/globalStatesContext";

const GlobalStatesProvider: React.FC = ({ children }) => {
  const [searched, setSearched] = React.useState("");

  const searchedState = {
    searched,
    setSearched,
  };

  return (
    <GlobalStatesContext.Provider value={{ searchedState }}>
      {children}
    </GlobalStatesContext.Provider>
  );
};

export default GlobalStatesProvider;
