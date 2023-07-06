import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { RhfTextField } from '../ui/RhfTextField';
import { Box, Button } from '@mui/material';

const schema = z.object({
  names: z.array(
    z
      .object({
        firstName: z.string().max(2),
        lastName: z.string().max(2),
      })
      .refine((val) => val.firstName !== val.lastName, {
        message: 'as',
        path: ['firstName'],
      })
  ),
});

type Inputs = z.input<typeof schema>;

export const RhfFieldArray = () => {
  const { control, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { names: [{ firstName: '', lastName: '' }] },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'names',
  });

  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: 'flex', gap: '16px' }}>
          <RhfTextField
            name={`names.${index}.firstName`}
            label='firstName'
            control={control}
          />
          <RhfTextField
            name={`names.${index}.lastName`}
            label='lastName'
            control={control}
          />
          <Button onClick={() => remove(index)}>削除</Button>
        </Box>
      ))}
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Button onClick={() => append({ firstName: '', lastName: '' })}>
          追加
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>送信</Button>
      </Box>
    </>
  );
};
