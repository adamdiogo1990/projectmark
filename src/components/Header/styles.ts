import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const BlueButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ActiveButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background-color: #2d3748;
  border-radius: 20px;
  border: 1px solid #2d3748;
`;

export const DefaultButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  color: #2d3748;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #bfcfe1;
`;

export const TextButton = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #2d3748;
`;