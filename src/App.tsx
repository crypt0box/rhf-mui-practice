import "./App.css";
import { styled, Button } from "@mui/material";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "./components/RhfTextField";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  width: "100%",
  padding: "16px",
});

const Flex = styled("div")({
  display: "flex",
  gap: "16px",
});

const schema = z.object({
  text: z.string(),
});

type FormProps = z.infer<typeof schema>;

const defaultValues: FormProps = {
  text: "",
};

function App() {
  const { control, handleSubmit, reset } = useForm<FormProps>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RhfTextField label="Text" name="text" control={control} />
      <Flex>
        <Button type="submit">送信</Button>
        <Button onClick={() => reset()}>リセット</Button>
      </Flex>
    </Form>
  );
}

export default App;
