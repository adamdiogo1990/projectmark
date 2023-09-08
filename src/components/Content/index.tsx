import React from 'react';
import { useKanbanContext } from '../../contexts/KanbanContext';
import ContentHeader from '../ContentHeader';
import KanbanColumn from '../KanbanColumn';
import { ContentWrapper, KanbanColumns, SelectType } from './styles';

const Content: React.FC = () => {
  const { selectedType } = useKanbanContext();

  const renderColumns = () => {
    switch (selectedType) {
      case 'basic':
        return ['Won', 'Lost', 'Closed'];
      case 'advanced':
        return ['Submitted', 'Won', 'Lost', 'Closed'];
      case 'expert':
        return ['In Progress', 'Submitted', 'Won', 'Lost'];
      case 'custom':
        return ['Lead', 'In Progress', 'Submitted', 'Won', 'Lost'];
      default:
        return [];
    }
  };

  const columns = renderColumns();

  return (
    <ContentWrapper>
      <SelectType>Please select the type of sales pipeline that best fits to your company</SelectType>
      <ContentHeader></ContentHeader>
      <KanbanColumns>
        {columns.map((column, index) => (
          <KanbanColumn key={index} title={column} />
        ))}
      </KanbanColumns>
    </ContentWrapper>
  );
};

export default Content;
