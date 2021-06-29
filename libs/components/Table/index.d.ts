/// <reference types="react" />
import './styles.css';
export declare enum SortDirection {
    asc = "ASC",
    desc = "DESC"
}
export declare type ColumnType<T extends string | number> = {
    dataName: T;
    displayName: string;
    hidden?: boolean;
};
export interface Props<T extends string | number> {
    columns: ColumnType<T>[];
    defaultSortColumn: T;
    searchTerm: string;
    searchColumn: T;
    headClasses?: string;
    onSearch: (arg: string) => void;
    renderTableContent: (...arg: any[]) => any;
}
export declare const composeTable: <T extends string | number>() => ({ columns, searchTerm, searchColumn, headClasses, defaultSortColumn, onSearch, renderTableContent, }: Props<T>) => JSX.Element;
