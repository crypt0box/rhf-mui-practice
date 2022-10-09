import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import type { RadioGroupProps as MuiRadioGroupProps } from "@mui/material";

type RadioProps = {
  value: string;
  label: string;
};

export type RadioGroupProps = MuiRadioGroupProps & {
  inputRef?: MuiRadioGroupProps["ref"];
  errorMessage?: string;
  radioProps: RadioProps[];
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  inputRef,
  radioProps,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      <FormControl error={!!errorMessage}>
        <MuiRadioGroup ref={inputRef} {...rest}>
          {radioProps.map((el) => (
            <FormControlLabel
              key={el.value}
              value={el.value}
              label={el.label}
              control={<Radio />}
            />
          ))}
        </MuiRadioGroup>
      </FormControl>
      {!!errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};
