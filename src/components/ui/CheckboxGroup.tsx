import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import type { FormGroupProps } from '@mui/material';

type CheckboxProps = {
  value: string;
  label: string;
};

export type CheckboxGroupProps = FormGroupProps & {
  inputRef?: FormGroupProps['ref'];
  errorMessage?: string;
  checkBoxPropsList: CheckboxProps[];
  checkedValues: string[];
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  inputRef,
  checkBoxPropsList,
  checkedValues,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      <FormGroup ref={inputRef} {...rest}>
        {checkBoxPropsList.map((props) => (
          <FormControlLabel
            key={props.value}
            control={
              <Checkbox
                value={props.value}
                checked={checkedValues.includes(props.value)}
              />
            }
            label={props.label}
          />
        ))}
      </FormGroup>
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};
