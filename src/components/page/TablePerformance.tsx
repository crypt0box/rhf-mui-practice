import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { RhfTableRow } from '../ui/RhfTableRow';
import { useTransition } from 'react';

type Table = {
  ids: boolean[];
};

export const TablePerformance = () => {
  const [isPending, startTransition] = useTransition();
  const { control, handleSubmit, setValue } = useForm<Table>({
    defaultValues: { ids: [] },
  });
  const onSubmit = (data: Table) => {
    // 条件に一致するインデックスの配列を返す
    const indexes = data.ids
      .map((checked, index) => (checked ? index : null))
      .filter((index) => index !== null) as number[];
    console.log(
      '🚀 ~ file: TablePerformance.tsx:25 ~ onSubmit ~ indexes',
      indexes
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button type='submit'>soshin</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <input
                type='checkbox'
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                onChange={(e) => {
                  if (e.target.checked) {
                    startTransition(() => {
                      setValue(
                        'ids',
                        Array.from({ length: 2000 }).fill(true) as boolean[]
                      );
                    });
                  } else {
                    startTransition(() => {
                      setValue(
                        'ids',
                        Array.from({ length: 2000 }).fill(false) as boolean[]
                      );
                    });
                  }
                }}
              />
            </TableCell>
            <TableCell>Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 2000 }).map((_, i) => (
            <RhfTableRow key={i} name={`ids.${i}`} control={control}>
              <TableCell>{i}</TableCell>
            </RhfTableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
};
