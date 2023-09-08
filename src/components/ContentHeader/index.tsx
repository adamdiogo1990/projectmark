import React from 'react';
import ButtonWithCheckbox from '../ButtonWithCheckbox';
import { HeaderWrapper } from './styles';

const ContentHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <ButtonWithCheckbox type="basic" text="Basic" />
      <ButtonWithCheckbox type="advanced" text="Advanced" />
      <ButtonWithCheckbox type="expert" text="Expert" />
      <ButtonWithCheckbox type="custom" text="Custom" />
    </HeaderWrapper>
  );
};

export default ContentHeader;
