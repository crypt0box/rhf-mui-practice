import { TableCell, TableRow, TableRowProps } from '@mui/material';
import { UseControllerProps, useController } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { Checkbox } from './Checkbox';

export type RhfTableRow<T extends FieldValues> = TableRowProps &
  UseControllerProps<T> & {
    children: React.ReactNode;
  };

export const RhfTableRow = <T extends FieldValues>(
  props: RhfTableRow<T>
): JSX.Element => {
  const { name, control, children } = props;
  const {
    field: { ref, onChange, value, ...rest },
  } = useController<T>({ name, control });

  return (
    <TableRow sx={{ backgroundColor: value && '#E6F2FF' }}>
      <TableCell>
        <Checkbox
          inputRef={ref}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.checked);
          }}
          {...rest}
          checked={value || false}
        />
      </TableCell>
      {children}
    </TableRow>
  );
};
