import { useId } from 'react';
import * as SC from './Select.style';

export const Select = ({ options, label, id, value = '', ...restParams }) => {
  const inputId = useId();

  return (
    <SC.Container>
      <SC.Label htmlFor={inputId}>{label}</SC.Label>
      <SC.Select {...restParams} id={inputId} value={value}>
        <option value="">empty</option>
        {options.map((options) => (
          <option key={options.value} value={options.value}>
            {options.label}
          </option>
        ))}
      </SC.Select>
    </SC.Container>
  );
};
