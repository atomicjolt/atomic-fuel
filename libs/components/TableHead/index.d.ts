/// <reference types="react" />
import { SortDirection, ColumnType } from '../Table';
interface Props<T extends string | number> {
    columns: ColumnType<T>[];
    searchColumn: T;
    sortColumn: T;
    sortDirection: SortDirection;
    searchTerm: string;
    classes?: string;
    onSearch: (searchTerm: string) => void;
    onSort: (newSortDirection: SortDirection, newSortColumn: T) => void;
}
export declare const composeTableHead: <T extends string | number>() => ({ columns, searchColumn, sortColumn, sortDirection, searchTerm, classes, onSearch, onSort, }: Props<T>) => JSX.Element;
export {};
