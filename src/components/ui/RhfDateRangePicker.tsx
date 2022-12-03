import styled from "@emotion/styled";
import { FormHelperText } from "@mui/material";
import { useEffect } from "react";
import {
  Control,
  FieldValues,
  Path,
  useController,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";
import { RhfDatePicker } from "./RhfDatePicker";

type RhfDateRangePickerProps<T extends FieldValues> = {
  correlationName: Path<T>;
  fromName: Path<T>;
  toName: Path<T>;
  control: Control<T>;
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
};

const VStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const RhfDateRangePicker = <T extends FieldValues>(
  props: RhfDateRangePickerProps<T>
) => {
  const { correlationName, fromName, toName, control, setError, clearErrors } =
    props;
  const {
    fieldState: { error },
  } = useController<T>({
    name: correlationName,
    control,
  });
  const {
    field: { value: fromValue },
  } = useController<T>({
    name: fromName,
    control,
  });
  const {
    field: { value: toValue },
  } = useController<T>({
    name: toName,
    control,
  });

  useEffect(() => {
    if (fromValue == null || toValue == null) {
      return;
    }
    if (fromValue > toValue) {
      setError(correlationName, {
        message: "From must be less than or equal to To",
      });
      return;
    }
    clearErrors(correlationName);
  }, [fromValue, toValue]);

  return (
    <VStack>
      <RhfDatePicker
        name={fromName}
        control={control}
        correlationError={!!error?.message}
      />
      <RhfDatePicker
        name={toName}
        control={control}
        correlationError={!!error?.message}
      />
      {!!error?.message && (
        <FormHelperText error>{error.message}</FormHelperText>
      )}
    </VStack>
  );
};
