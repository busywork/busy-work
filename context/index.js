import { createContext, useContext } from 'react';

import data from '../data.json';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { boards } = data;

  const value = {
    boards,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
