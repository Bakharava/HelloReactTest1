import { createContext, ReactNode, useState } from 'react';

const defaultState = {
  language: 'English',
  setLanguage(param: string) {},
};

const AppContext = createContext(defaultState);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(defaultState.language);
  const providerValues = { language, setLanguage };

  return <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>;
};

export { AppContext };
