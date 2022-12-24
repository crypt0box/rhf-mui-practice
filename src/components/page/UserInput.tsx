import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { z } from 'zod';

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
      weight: Number(inputs.weight) < 0 ? 0 : inputs.weight,
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
export const UserInput = () => {
  const [formInput, setFormInput] = useState<Inputs>({
    name: '',
    weight: '',
    birthday: new Date(),
  });
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const newValue = e.target.value;
    setFormInput({ ...formInput, [name]: newValue });
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const request: Request = schema.parse(formInput);
      await axios.post('/api/user', request);
    } catch (error) {
      return;
    }
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <TextField
        sx={{ width: '200px' }}
        name='name'
        label='name'
        value={formInput.name}
        onChange={handleInput}
      />
      <TextField
        sx={{ width: '200px' }}
        type='number'
        name='weight'
        label='weight'
        value={formInput.weight}
        onChange={handleInput}
      />
      <DatePicker
        label='birthday'
        value={formInput.birthday || null}
        onChange={() => handleInput}
        renderInput={(params) => (
          <TextField {...params} sx={{ width: '200px' }} name='birthday' />
        )}
      />
      <Button sx={{ width: '200px' }} variant='contained' type='submit'>
        送信する
      </Button>
    </StyledForm>
  );
};
