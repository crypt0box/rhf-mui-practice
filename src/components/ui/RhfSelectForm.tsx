import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { SelectForm, SelectFormProps } from './SelectForm';

export type RhfSelectFormProps<T extends FieldValues> = Omit<
  SelectFormProps,
  'selectedValue'
> &
  UseControllerProps<T>;

export const RhfSelectForm = <T extends FieldValues>(
  props: RhfSelectFormProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: selectedValue, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
    <SelectForm
      inputRef={ref}
      onChange={(e) => onChange(e)}
      {...rest}
      {...props}
      selectedValue={selectedValue}
      errorMessage={error && error.message}
    />
  );
};
