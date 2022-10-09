import { useController } from "react-hook-form";
import type {
  FieldValues,
  UseControllerProps,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { SelectField, SelectFieldProps } from "./SelectForm";

export type RhfSelectFieldProps<T extends FieldValues> = Omit<
  SelectFieldProps,
  "selectedValue"
> &
  UseControllerProps<T>;

export const RhfSelectField = <T extends FieldValues>(
  props: RhfSelectFieldProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: selectedValue, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <SelectField
      inputRef={ref}
      onChange={(e) => onChange(e)}
      {...rest}
      {...props}
      selectedValue={selectedValue}
      errorMessage={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};
