import React from 'react';
import SortableHeader from '../SortableHeader';
import cn from 'classnames'
import { SortDirection, TableFilter } from '../Table';

type Column = {
  dataName: string,
  displayName: string,
  hidden?: boolean,
};
interface Props {
  columns: Column[],
  searchColumn: string,
  sortColumn: string,
  sortDirection: SortDirection,
  searchTerm: string,
  classes?: string,
  onSearch: (searchTerm: string) => void,
  onSort: (newSortDirection: SortDirection, newSortColumn: TableFilter | string) => void,
}

export function TableHead({
  columns,
  searchColumn,
  sortColumn,
  sortDirection,
  searchTerm,
  classes,
  onSearch,
  onSort,
}: Props) {

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
