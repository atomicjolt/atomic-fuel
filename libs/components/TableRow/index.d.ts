import React from 'react';
import { TableFilter } from '../Table';
import './styles.scss';
interface Props {
    data: any;
    renderData: (data: any, filter: TableFilter | string) => React.ReactNode;
    filters: TableFilter[];
}
export declare function TableRow({ data, filters, renderData, }: Props): JSX.Element;
export {};
