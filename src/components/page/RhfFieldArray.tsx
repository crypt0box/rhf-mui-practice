import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { RhfTextField } from '../ui/RhfTextField';
import { Box, Button } from '@mui/material';
// url -> http://localhost:5173/rhfFieldArray
const schema = z
  .object({
    names: z.array(
      z.object({
        firstName: z.string().max(5),
        lastName: z.string().max(5),
      })
    ),
  })
  // firstName列の重複チェック
  .superRefine((arr, ctx) => {
    const firstNameList = arr.names.map((name) => name.firstName);
    arr.names.forEach(({ firstName }, index) => {
      // 入力したformの値以外のformのfirstNameのリスト
      const firstNameListFilteredMe = firstNameList.filter(
        (_, idx) => idx !== index
      );
      // 入力したformの値とその他のフォームの値が重複しているかチェック
      if (firstName && firstNameListFilteredMe.includes(firstName)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `col_correlation`,
          path: ['names', index, 'firstName'],
        });
      }
    });
  })
  // 行の重複チェック
  // firstName側にエラーメッセージを表示
  .superRefine((arr, ctx) => {
    arr.names.forEach(({ firstName, lastName }, index) => {
      if (firstName && lastName && firstName === lastName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `row_correlation`,
          path: ['names', index, 'firstName'],
        });
      }
    });
  })
  // lastName側にエラーメッセージを表示
  .superRefine((arr, ctx) => {
    arr.names.forEach(({ firstName, lastName }, index) => {
      if (firstName && lastName && firstName === lastName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `row_correlation`,
          path: ['names', index, 'lastName'],
        });
      }
    });
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
