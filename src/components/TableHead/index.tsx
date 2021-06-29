import React from 'react';
import SortableHeader from '../SortableHeader';
import cn from 'classnames';
import { SortDirection, ColumnType } from '../Table';

interface Props<T extends string | number> {
  columns: ColumnType<T>[],
  searchColumn: T,
  sortColumn: T,
  sortDirection: SortDirection,
  searchTerm: string,
  classes?: string,
  onSearch: (searchTerm: string) => void,
  onSort: (newSortDirection: SortDirection, newSortColumn: T) => void,
}

export const composeTableHead = <T extends string | number>() => {
  return ({
    columns,
    searchColumn,
    sortColumn,
    sortDirection,
    searchTerm,
    classes,
    onSearch,
    onSort,
  }: Props<T>) => {

    return (
      <thead className={cn('aj-table__head', classes)}>
        <tr className={cn('aj-table__head-row')}>
          {columns.map((column, index) => {
            if (column.hidden) {
              return (
                <th
                  scope="col"
                  aria-label={column.displayName}
                  key={column.dataName}
                />
              );
            }

            return (
              <SortableHeader
                key={column.dataName}
                ariaName={column.displayName}
                sortPath={column.dataName}
                onSort={onSort}
                currentDirection={sortDirection}
                currentPath={sortColumn}
                searchTerm={searchTerm}
                searchable={searchColumn === column.dataName}
                searchTitle={column.displayName}
                searchResultCount={0}
                onSearch={onSearch}
              >
                {column.displayName}
              </SortableHeader>
            );
          })}
        </tr>
      </thead>
    );
  }

}
