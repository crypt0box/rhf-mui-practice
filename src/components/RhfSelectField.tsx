import { useController } from "react-hook-form";
import type {
  FieldValues,
  UseControllerProps,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { SelectForm, SelectFormProps } from "./SelectForm";

export type RhfSelectFormProps<T extends FieldValues> = Omit<
  SelectFormProps,
  "selectedValue"
> &
  UseControllerProps<T>;

export const RhfSelectForm = <T extends FieldValues>(
  props: RhfSelectFormProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: selectedValue, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <SelectForm
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
