import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { TextField, TextFieldProps } from "./TextField";

export type RhfTextFieldProps<T extends FieldValues> = TextFieldProps &
  UseControllerProps<T>;

export const RhfTextField = <T extends FieldValues>(
  props: RhfTextFieldProps<T>
) => {
  const { name, control } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...props}
      errorMessage={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};
