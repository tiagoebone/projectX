import { useContext } from "react";

import GlobalStatesContext from "../context/globalStatesContext";

function useGlobalStates() {
  const context = useContext(GlobalStatesContext);
  if (!context) {
    throw new Error("useModules precisa ser usado por um RecursosProvider");
  }
  return { ...context };
}

export default useGlobalStates;
