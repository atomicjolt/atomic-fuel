import React from 'react';
import { ColumnType } from '../Table';
import './styles.scss';

interface Props {
  data: any,
  renderData: (data: any, column: ColumnType) => React.ReactNode,
  columns: ColumnType[]
}

export function TableRow({
  data,
  columns,
  renderData,
}: Props) {
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
