import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchLatestData, updateData } from '../Services/api';

const ScenarioDataContext = createContext();

export const useScenarioData = () => {
  const context = useContext(ScenarioDataContext);
  if (!context) {
    throw new Error('useScenarioData must be used within a ScenarioDataProvider');
  }
  return context;
};

export const ScenarioDataProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await fetchLatestData();
        setSessionData(data);
      } catch (error) {
        console.error('Failed to fetch initial data:', error);
      }
    };
    loadInitialData();
  }, []);

  const updateSessionData = (key, value) => {
    setSessionData(prevData => {
      const newData = { ...prevData, [key]: value };
      updateData(newData).catch(console.error);
      return newData;
    });
  };

  return (
    <ScenarioDataContext.Provider value={{ sessionData, updateSessionData }}>
      {children}
    </ScenarioDataContext.Provider>
  );
};