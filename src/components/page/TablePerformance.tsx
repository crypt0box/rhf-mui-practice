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
  id: number[];
};

export const TablePerformance = () => {
  const { control, handleSubmit } = useForm<Table>({
    defaultValues: { id: [] },
  });
  const onSubmit = (data: Table) => {
    console.log('🚀 ~ file: TablePerformance.tsx:18 ~ onSubmit ~ data', data);
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
          {Array.from({ length: 3 }).map((_, i) => (
            <RhfTableRow key={i} index={i} name={`id.${i}`} control={control}>
              <TableCell>{i}</TableCell>
            </RhfTableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
};
