import React, { VFC } from 'react';

type Props = {
  value: boolean;
  onChange: VoidFunction;
  label: string;
};

const Checkbox: VFC<Props> = ({ label, value, onChange }) => (
  <label>
    <input type="checkbox" checked={value} onChange={onChange} />
    {label}
  </label>
);

export default Checkbox;
