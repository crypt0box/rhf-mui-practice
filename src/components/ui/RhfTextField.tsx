import {
  DeepMap,
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
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
  const testName = name.split(".");
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  if (name.match(/\./)) {
    // const splitName = name.split(".");
    // // console.log("🚀 ~ file: RhfTextField.tsx:27 ~ splitName", splitName);
    // const first = splitName[0];
    // const second = splitName[1];
    // const a = errors[first] as FieldErrorsImpl<DeepRequired<T>>;
    // const b = a[second];
    // console.log("🚀 ~ file: RhfTextField.tsx:30 ~ b ", b);
    // const second = splitName[1];
    // const third = splitName[2];
    // const b = a[second];
    // console.log("🚀 ~ file: RhfTextField.tsx:33 ~ getErrorMessage ~ b", b);
    // const getErrorMessage = (name: string) => {
    //   return;
    // };
    // return errors[name];
    // forで回してアクセスする？
    // https://kuroeveryday.blogspot.com/2016/07/key-exists-in-nested-object.html
  }

  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...props}
      errorMessage={
        errors[testName[0]] &&
        `${errors[name] as DeepMap<FieldValues, FieldError>}`
      }
    />
  );
};
