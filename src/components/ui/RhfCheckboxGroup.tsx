import React from 'react';
import { useController } from 'react-hook-form';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';

export type RhfCheckboxGroupProps<T extends FieldValues> = Omit<
  CheckboxGroupProps,
  'checkedValues'
> &
  UseControllerProps<T>;

export const RhfCheckboxGroup = <T extends FieldValues>(
  props: RhfCheckboxGroupProps<T>
): JSX.Element => {
  const { name, control } = props;
  const {
    field: { ref, onChange, value: checkedValues, ...rest },
    fieldState: { error },
  } = useController<T>({ name, control });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckedValueList: string[] = [];
    if (e.target.checked) {
      // チェックボックスがチェックされた時、チェックされた値を重複値の無い配列に追加
      newCheckedValueList = [...new Set([...checkedValues, e.target.value])];
    } else {
      // チェックボックスが外された時は、チェックが外された値を配列から削除
      newCheckedValueList = [...checkedValues].filter(
        (value) => value !== e.target.value
      );
    }
    return newCheckedValueList;
  };

  return (
    <CheckboxGroup
      inputRef={ref}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(handleChange(e))
      }
      {...rest}
      checkBoxPropsList={props.checkBoxPropsList}
      checkedValues={[...checkedValues]}
      errorMessage={error && error.message}
    />
  );
};
