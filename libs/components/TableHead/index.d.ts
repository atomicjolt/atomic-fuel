/// <reference types="react" />
import { SortDirection, TableFilter } from '../Table';
declare type Column = {
    dataName: string;
    displayName: string;
    hidden?: boolean;
};
interface Props {
    columns: Column[];
    searchColumn: string;
    sortColumn: string;
    sortDirection: SortDirection;
    searchTerm: string;
    classes?: string;
    onSearch: (searchTerm: string) => void;
    onSort: (newSortDirection: SortDirection, newSortColumn: TableFilter | string) => void;
}
export declare function TableHead({ columns, searchColumn, sortColumn, sortDirection, searchTerm, classes, onSearch, onSort, }: Props): JSX.Element;
export {};
