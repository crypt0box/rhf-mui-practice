import styled from "@emotion/styled";
import { FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { RhfDatePicker } from "./RhfDatePicker";

type RhfDateRangePickerProps<T extends FieldValues> = {
  correlationName: Path<T>;
  fromName: Path<T>;
  toName: Path<T>;
  control: Control<T>;
};

const VStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const RhfDateRangePicker = <T extends FieldValues>(
  props: RhfDateRangePickerProps<T>
) => {
  const { correlationName, fromName, toName, control } = props;
  const {
    fieldState: { error },
  } = useController<T>({
    name: correlationName,
    control,
  });
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
