import React from 'react';
import { SortDirection } from '../Table';
import './styles.css';
export interface Props {
    children: React.ReactNode;
    rowSpan: number;
    onSort: Function;
    sortPath: string;
    ariaName: string;
    currentPath: string;
    currentDirection: SortDirection;
    tooltip: React.ReactNode;
    searchable: boolean;
    searchTitle: string;
    onSearch: Function;
    searchTerm: string;
    searchResultCount: number;
    announceAssertive: Function;
    initializing: boolean;
}
declare const _default: (props: any) => JSX.Element;
export default _default;
