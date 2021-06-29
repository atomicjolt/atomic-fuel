import React from 'react';
import { ColumnType } from '../Table';
import './styles.scss';
interface Props {
    data: any;
    renderData: (data: any, column: ColumnType) => React.ReactNode;
    columns: ColumnType[];
}
export declare function TableRow({ data, columns, renderData, }: Props): JSX.Element;
export {};
