import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { RadioGroup, RadioGroupProps } from './RadioGroup';

export type RhfRadioGroupProps<T extends FieldValues> = RadioGroupProps &
  UseControllerProps<T>;

export const RhfRadioGroup = <T extends FieldValues>(
  props: RhfRadioGroupProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  return (
    <RadioGroup
      inputRef={ref}
      {...rest}
      {...props}
      errorMessage={error && error.message}
    />
  );
};
