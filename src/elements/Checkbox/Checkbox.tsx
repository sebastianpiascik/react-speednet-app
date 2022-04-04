import React, { VFC } from 'react';

import { StyledLabel, StyledInput } from './Checkbox.styled';

type Props = {
  value: boolean;
  onChange: VoidFunction;
  label: string;
};

const Checkbox: VFC<Props> = ({ label, value, onChange }) => (
  <StyledLabel>
    <StyledInput type="checkbox" checked={value} onChange={onChange} />
    {label}
  </StyledLabel>
);

export default Checkbox;
