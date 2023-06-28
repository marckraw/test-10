import React, { createContext, useState } from 'react';

const defaultValue: { settings: any; setSettings: any } = {
  settings: {},
  setSettings: {},
};

export const SettingsContext = createContext(defaultValue);

const SettingsContextProvider = ({ settings: currSettings, children }) => {
  const [settings, setSettings] = useState(currSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
