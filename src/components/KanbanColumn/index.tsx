import React from 'react';
import { KanbanColumnWrapper, RoundedBar, RoundedBarSub, Title } from './styles';

interface KanbanColumnProps {
  title: string;
}
const KanbanColumn: React.FC<KanbanColumnProps> = ({ title }) => {
  const columnColors: Record<string, string> = {
    Lead: 'linear-gradient(180deg, rgba(247,241,255,1) 78%, rgba(255,255,255,1) 100%);',
    'In Progress': 'linear-gradient(180deg, rgba(254,246,239,1) 78%, rgba(255,255,255,1) 100%);',
    Submitted: 'linear-gradient(180deg, rgba(229,244,255,1) 78%, rgba(255,255,255,1) 100%);',
    Won: 'linear-gradient(180deg, rgba(221,246,247,1) 78%, rgba(255,255,255,1) 100%);',
    Lost: 'linear-gradient(180deg, rgba(255,241,246,1) 78%, rgba(255,255,255,1) 100%);',
    Closed: 'linear-gradient(180deg, rgba(242,247,250,1) 78%, rgba(255,255,255,1) 100%);',
  };

  const primaryColors: Record<string, string> = {
    Lead: '#DBBFFE',
    'In Progress': '#FFE4CC',
    Submitted: '#C0E3FF',
    Won: '#82DDE5',
    Lost: '#FFBFD2',
    Closed: '#9ca9b7',
  };

  const secondaryColors: Record<string, string> = {
    Lead: '#c7a3f7',
    'In Progress': '#FFD6B5',
    Submitted: '#99D1FF',
    Won: '#70c3c9',
    Lost: '#d695a8',
    Closed: '#CBD5E0',
  };

  return (
    <KanbanColumnWrapper background={columnColors[title]}>
      <Title color={primaryColors[title]}>
        {title}
      </Title>
      <RoundedBar background={primaryColors[title]}>
        <RoundedBarSub background={secondaryColors[title]}></RoundedBarSub>
      </RoundedBar>
    </KanbanColumnWrapper>
  );
};

export default KanbanColumn;
