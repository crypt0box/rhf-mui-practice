import { ControlTextField } from "../ui/ControlTextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { RhfDateRangePicker } from "../ui/RhfDateRangePicker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

const schema = z.object({
  date: z
    .object({
      from: z
        .date()
        .nullable()
        .refine((date) => date !== null, "Required"),
      to: z
        .date()
        .nullable()
        .refine((date) => date !== null, "Required"),
    })
    .partial()
    .refine((date) => {
      console.log("🚀 ~ file: Range.tsx:28 ~ .refine ~ date", date);
      if (date.from == null || date.to == null) {
        return true;
      }
      return date.from <= date.to;
    }, "FromはToより前にしてください"),
});

type Inputs = z.infer<typeof schema>;

// type Inputs = {
//   date: {
//     from: Date | null;
//     to: Date | null;
//   };
// };

export const Range = () => {
  const { control, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: {
        from: null,
        to: null,
      },
    },
    mode: "all",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <RhfDateRangePicker
        correlationName="date"
        fromName="date.from"
        toName="date.to"
        control={control}
      />
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </StyledForm>
  );
};
