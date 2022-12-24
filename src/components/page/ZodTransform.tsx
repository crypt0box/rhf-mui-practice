import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RhfDatePicker } from '../ui/RhfDatePicker';
import { RhfTextField } from '../ui/RhfTextField';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '10px',
});

const schema = z
  .object({
    name: z.string().max(10),
    weight: z.string(),
    birthday: z.date(),
  })
  .transform((inputs) => {
    return {
      ...inputs,
      weight: inputs.weight.length,
      birthday: inputs.birthday.toISOString(),
    };
  });

type Inputs = z.input<typeof schema>;
/**
 * type Inputs = {
 *   name: string;
 *   weight: string;
 *   birthday: Date;
 *  }
 */
type Request = z.output<typeof schema>;
/**
 * type Request = {
 *   name: string;
 *   weight: number;
 *   birthday: string;
 *  }
 */
export const ZodTransform = () => {
  const { control, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', weight: '', birthday: new Date() },
  });

  const onSubmit = <T,>(data: T) => {
    const d = data as Request;
    console.log('🚀 ~ file: ZodTransform.tsx:51 ~ onSubmit ~ data', d);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <RhfTextField
        sx={{ width: '200px' }}
        name='name'
        label='name'
        control={control}
      />
      <RhfTextField
        sx={{ width: '200px' }}
        name='weight'
        label='weight'
        control={control}
      />
      <RhfDatePicker name='birthday' control={control} />
      <Button sx={{ width: '200px' }} variant='contained' type='submit'>
        送信する
      </Button>
    </StyledForm>
  );
};
