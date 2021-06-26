/// <reference types="react" />
import './styles.css';
export declare enum TableFilter {
    createdAt = "CREATED_AT",
    dueAt = "DUE_AT",
    name = "NAME",
    completed = "COMPLETED"
}
export declare enum SortDirection {
    asc = "ASC",
    desc = "DESC"
}
export declare type ColumnType = {
    dataName: TableFilter | string;
    displayName: string;
    hidden?: boolean;
};
export interface Props {
    columns: ColumnType[];
    filter: TableFilter;
    searchTerm: string;
    searchColumn: TableFilter | string;
    headClasses: string;
    onSearch: <T>(arg: T) => any;
    renderTableContent: (...arg: any[]) => any;
}
export declare const Table: ({ columns, searchTerm, searchColumn, headClasses, onSearch, renderTableContent, }: Props) => JSX.Element;
