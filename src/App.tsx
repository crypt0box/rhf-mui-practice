import "./App.css";
import { styled, Button, Box } from "@mui/material";
import { z } from "zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { RhfTextField } from "./components/ui/RhfTextField";
import { RhfRadioGroup } from "./components/ui/RhfRadioGroup";
import { RhfSelectForm } from "./components/ui/RhfSelectForm";
import { RhfCheckboxGroup } from "./components/ui/RhfCheckboxGroup";
import { RhfDatePicker } from "./components/ui/RhfDatePicker";

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
  select: z.string().min(1, { message: "Required" }),
  checkbox: z.string().array().min(1, { message: "Required" }),
  date: z
    .date()
    .nullable()
    .refine((date) => date !== null, "Required"),
  questions: z
    .object({
      text1: z.string().max(2, { message: "Required" }),
    })
    .array(),
});

type Inputs = z.infer<typeof schema>;

const defaultValues: Inputs = {
  text: "",
  radio: "",
  select: "",
  checkbox: [],
  date: null,
  questions: [{ text1: "" }],
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
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const addQuestion = () => {
    append({ text1: "" });
  };

  const removeQuestion = (index: number) => {
    remove(index);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Flex key={field.id}>
          <RhfTextField
            label="Text"
            name={`questions.${index}.text1`}
            control={control}
          />
          <Button onClick={() => removeQuestion(index)}>削除</Button>
        </Flex>
      ))}
      <Button onClick={addQuestion}>追加</Button>
      <RhfTextField label="Text" name="text" control={control} />
      <RhfRadioGroup name="radio" control={control} radioPropsList={props} />
      <RhfSelectForm
        label="Select"
        name="select"
        control={control}
        selectPropsList={props}
      />
      <RhfCheckboxGroup
        name="checkbox"
        control={control}
        checkBoxPropsList={props}
      />
      <RhfDatePicker name="date" control={control} />
      <Flex>
        <Button type="submit">送信</Button>
        <Button onClick={() => reset()}>リセット</Button>
      </Flex>
    </Form>
  );
}

export default App;
