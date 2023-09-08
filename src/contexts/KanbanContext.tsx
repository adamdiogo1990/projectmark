// KanbanContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type KanbanContextType = {
  selectedType: string;
  setSelectedType: (type: string) => void;
};

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

interface KanbanProviderProps {
  children: ReactNode;
}

export const KanbanProvider: React.FC<KanbanProviderProps> = ({ children }) => {
  const [selectedType, setSelectedType] = useState<string>('basic');

  return (
    <KanbanContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanbanContext = () => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error('useKanbanContext must be used within a KanbanProvider');
  }
  return context;
};
