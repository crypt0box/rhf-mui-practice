import { ControlTextField } from '../ui/ControlTextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { RhfDateRangePicker } from '../ui/RhfDateRangePicker';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const schema = z.object({
  date: z
    .object({
      from: z
        .date()
        .nullable()
        .refine((date) => date !== null, 'Required'),
      to: z
        .date()
        .nullable()
        .refine((date) => date !== null, 'Required'),
    })
    .refine((date) => {
      if (date.from == null || date.to == null) {
        return true;
      }
      return date.from <= date.to;
    }, 'From must be less than or equal to To'),
});

type Inputs = z.infer<typeof schema>;

// type Inputs = {
//   date: {
//     from: Date | null;
//     to: Date | null;
//   };
// };

export const Range = () => {
  const [num, setNum] = useState(0);
  const { control, handleSubmit, setError, clearErrors } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: {
        from: null,
        to: null,
      },
    },
    mode: 'all',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <RhfDateRangePicker
        correlationName='date'
        fromName='date.from'
        toName='date.to'
        control={control}
        setError={setError}
        clearErrors={clearErrors}
      />
      <Button variant='contained' type='submit'>
        送信する
      </Button>
      <Button onClick={() => setNum((num) => num + 1)}>ぼたん</Button>
    </StyledForm>
  );
};
