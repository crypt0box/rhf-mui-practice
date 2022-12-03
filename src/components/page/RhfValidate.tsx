import { ControlTextField } from "../ui/ControlTextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

type Inputs = {
  text: {
    name: string;
  };
};

export const RhfValidate = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ControlTextField name="text.name" control={control} />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </StyledForm>
  );
};

/**
 * - 型推論はzodじゃなくても全然行ける
 * - zodだとtransformのメリットが蓋然としてある
 */
