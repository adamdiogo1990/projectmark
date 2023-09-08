import React from 'react';
import Content from '../../components/Content';
import Header from '../../components/Header';
import { KanbanProvider } from '../../contexts/KanbanContext';

const KanbanPage: React.FC = () => {
  return (
    <KanbanProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </KanbanProvider>
  );
};

export default KanbanPage;
