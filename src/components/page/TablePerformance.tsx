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

type Table = {
  ids: boolean[];
};

export const TablePerformance = () => {
  const { control, handleSubmit } = useForm<Table>({
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
            <TableCell>Check</TableCell>
            <TableCell>Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <RhfTableRow key={i} index={i} name={`ids.${i}`} control={control}>
              <TableCell>{i}</TableCell>
            </RhfTableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
};
