import { TextField } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type ControlTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export const ControlTextField = <T extends FieldValues>(
  props: ControlTextFieldProps<T>
) => {
  return (
    <Controller
      {...props}
      rules={{
        required: "必須やよ",
        validate: (value) =>
          value !== "hoge"
            ? undefined
            : `「hoge」を含んだ文字列を入力してください`,
      }}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...field}
            type="text"
            label="名前"
            error={fieldState.error !== undefined}
            helperText={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
