import styled from 'styled-components';

export const KanbanColumnWrapper = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  flex: 1;
  flex-direction: column;
  display: flex;
  gap: 10px;
`;

export const Title = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: bold;
  box-sizing: border-box;
  text-align: left;
`;

export const RoundedBar = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  width: 50%;
  border-radius: 20px;
  height: 20px;
  margin-top; 10px;
`;

export const RoundedBarSub = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  width: 30%;
  border-radius: 20px;
  height: 20px;
  margin-top; 10px;
`;