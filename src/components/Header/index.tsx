import React from 'react';
import { ActiveButton, BlueButton, ButtonsWrapper, ContainerButton, DefaultButton, HeaderWrapper, Logo, TextButton } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src="/path/to/logo.png" alt="Logo" />
      <ButtonsWrapper>
        <ContainerButton>
            <ActiveButton>
              1
            </ActiveButton>
            <TextButton>
              Sales Pipeline Settings
            </TextButton>
        </ContainerButton>
        <ContainerButton>
            <DefaultButton>
              2
            </DefaultButton>
            <TextButton>
              Opportunity Details Settings
            </TextButton>
        </ContainerButton>
      </ButtonsWrapper>
      <BlueButton>Next</BlueButton>
    </HeaderWrapper>
  );
};

export default Header;
