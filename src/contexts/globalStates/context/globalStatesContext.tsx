import { createContext } from "react";

export interface GlobalStatesTypes {
  searchedState: {
    searched: string;
    setSearched: React.Dispatch<React.SetStateAction<string>>;
  };
}

const RecrusosContext = createContext<GlobalStatesTypes>(
  {} as GlobalStatesTypes
);

export default RecrusosContext;
