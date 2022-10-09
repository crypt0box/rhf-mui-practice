import "./App.css";
import { styled, Button } from "@mui/material";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RhfTextField } from "./components/RhfTextField";
import { RhfRadioGroup } from "./components/RhfRadioGroup";

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
  text: z.string().min(1, { message: "Required" }),
  radio: z.string().min(1, { message: "Required" }),
});

type Inputs = z.infer<typeof schema>;

const defaultValues: Inputs = {
  text: "",
  radio: "",
};

const props = [
  {
    label: "りんご",
    value: "apple",
  },
  {
    label: "みかん",
    value: "orange",
  },
  {
    label: "ばなな",
    value: "banana",
  },
];

function App() {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RhfTextField label="Text" name="text" control={control} />
      <RhfRadioGroup name="radio" control={control} radioProps={props} />
      <Flex>
        <Button type="submit">送信</Button>
        <Button onClick={() => reset()}>リセット</Button>
      </Flex>
    </Form>
  );
}

export default App;
