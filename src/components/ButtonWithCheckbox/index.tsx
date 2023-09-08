import React from 'react';
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useKanbanContext } from '../../contexts/KanbanContext';
import { ButtonWrapper, CheckIcon } from './styles';


interface ButtonWithCheckboxProps {
  type: string;
  text: string;
}

const ButtonWithCheckbox: React.FC<ButtonWithCheckboxProps> = ({ type, text }) => {
  const { selectedType, setSelectedType } = useKanbanContext();

  const handleCheckboxChange = () => {
    if (selectedType !== type) {
      setSelectedType(type);
    }
  };

  return (
    <ButtonWrapper isActive={selectedType === type} onClick={handleCheckboxChange}>
      {selectedType === type ? <CheckIcon color='#1e5dd0' icon={faSquareCheck} /> : <CheckIcon color='#bfcfe1' icon={faSquare} />}
      {text}
    </ButtonWrapper>
  );
};

export default ButtonWithCheckbox;
