import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material';

type SelectProps = {
  label: string;
  value: string;
};

export type SelectFormProps = MuiSelectProps & {
  inputRef?: MuiSelectProps['ref'];
  errorMessage?: string;
  selectPropsList: SelectProps[];
  selectedValue: string;
};

export const SelectForm: React.FC<SelectFormProps> = ({
  inputRef,
  errorMessage,
  selectPropsList,
  selectedValue,
  label,
  ...rest
}) => {
  return (
    <div>
      <FormControl error={!!errorMessage}>
        <InputLabel>{label}</InputLabel>
        <Select ref={inputRef} value={selectedValue} label={label} {...rest}>
          {selectPropsList.map((props) => (
            <MenuItem key={props.value} value={props.value}>
              {props.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};
