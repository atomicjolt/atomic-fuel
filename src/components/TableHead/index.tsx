import React from 'react';
import SortableHeader from '../SortableHeader';
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

  onSearch: (searchTerm: string) => void,
  onSort: (newSortDirection: SortDirection, newSortColumn: TableFilter | string) => void,
}

export function TableHead(props: Props) {

  return (
    <thead>
      <tr>
        {props.columns.map((column) => (column.hidden
          ?
            <th aria-label={column.displayName} key={column.dataName} />
          :
            <SortableHeader
              key={column.dataName}
              ariaName={column.displayName}
              sortPath={column.dataName}
              onSort={props.onSort}
              currentDirection={props.sortDirection}
              currentPath={props.sortColumn}
              searchTerm={props.searchTerm}
              searchable={props.searchColumn === column.dataName}
              searchTitle={column.displayName}
              searchResultCount={0}
              onSearch={props.onSearch}
            >
              {column.displayName}
            </SortableHeader>
        ))}
      </tr>
    </thead>
  );
}
