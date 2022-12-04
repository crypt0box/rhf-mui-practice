import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { ChangeEvent, FormEvent, useState } from "react";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

type Inputs = {
  userId: string;
  userName: string;
  birthday: Date;
};

export const UserInput = () => {
  const [formInput, setFormInput] = useState<Inputs>({
    userId: "",
    userName: "",
    birthday: new Date(),
  });
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormInput({ ...formInput, [name]: newValue });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formInput);
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField
        name="userId"
        value={formInput.userId}
        onChange={handleInput}
      />
      <TextField
        name="userName"
        value={formInput.userName}
        onChange={handleInput}
      />
      <DatePicker
        value={formInput.birthday || null}
        onChange={(e: Date | null) => handleInput}
        renderInput={(params) => <TextField {...params} name="birthday" />}
      />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </StyledForm>
  );
};
