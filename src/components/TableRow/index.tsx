import React from 'react';
import { ColumnType } from '../Table';
import './styles.scss';

interface Props<T extends string | number> {
  data: any,
  renderData: (data: any, column: ColumnType<T>) => React.ReactNode,
  columns: ColumnType<T>[]
}

export function TableRow<T extends string | number>({
  data,
  columns,
  renderData,
}: Props<T>) {
  return (
    <tr className="aj-table__row">
      { columns.map(columns => {
        return (
          <td className="aj-table__row-data">
            {renderData(data, columns)}
          </td>
        );
      })}
    </tr>
  );
}
