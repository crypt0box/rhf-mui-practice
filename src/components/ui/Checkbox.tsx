import { Checkbox as MuiCheckbox } from '@mui/material';

import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export type CheckboxProps = MuiCheckboxProps & {
  inputRef?: MuiCheckboxProps['ref'];
};

export const Checkbox: React.FC<CheckboxProps> = ({ inputRef, ...rest }) => {
  return <MuiCheckbox ref={inputRef} {...rest} />;
};
