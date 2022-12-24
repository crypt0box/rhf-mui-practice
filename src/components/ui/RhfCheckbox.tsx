import { useController } from 'react-hook-form';

import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { Checkbox, CheckboxProps } from './Checkbox';

export type RhfCheckbox<T extends FieldValues> = CheckboxProps &
  UseControllerProps<T>;

export const RhfCheckbox = <T extends FieldValues>(
  props: RhfCheckbox<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value, ...rest },
  } = useController<T>({ name, control });

  return (
    <Checkbox
      inputRef={ref}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      {...rest}
      {...props}
    />
  );
};
