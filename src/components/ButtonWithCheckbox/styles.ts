import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const ButtonWrapper = styled.button<{ isActive: boolean }>`
  position: relative;
  border: ${(props) => (props.isActive ? '2px solid #1e5dd0' : '2px solid #bfcfe1')};
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  overflow: visible; 
  
  &::after {
    content: '';
    position: absolute;
    bottom: -40px; 
    left: 50%;
    transform: translateX(-100%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent ${(props) => (props.isActive ? '#1e5dd0' : 'transparent')};
    transform-origin: 0 0;
    transform: rotate(180deg);
  }
`;

export const CheckIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
