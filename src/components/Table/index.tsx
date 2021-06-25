import React, { useState } from 'react';
import { TableHead } from '../TableHead';
import './styles.css';

export enum TableFilter {
  createdAt = 'CREATED_AT',
  dueAt = 'DUE_AT',
  name = 'NAME',
  completed = 'COMPLETED',
}

export enum SortDirection {
  asc = 'ASC',
  desc = 'DESC',
}

export type ColumnType = {
	dataName: TableFilter | string
	displayName: string
	hidden?: boolean
}
export interface Props {
	columns: ColumnType[]
	filter: TableFilter
	searchTerm: string
	searchColumn: TableFilter | string
	onSearch: <T>(arg: T) => any
	renderTableContent: (...arg: any[]) => any
}

export const Table = ({
	columns,
	searchTerm,
	searchColumn,
	onSearch,
	renderTableContent,
}: Props) => {
	const [sortColumn, setSortColumn] = useState<TableFilter | string>(TableFilter.createdAt);
	const [sortDirection, setSortDirection] = useState(SortDirection.asc);

	return (
		<table className="aj-table">
			<TableHead
				columns={columns}
				searchColumn={searchColumn}
				sortColumn={sortColumn}
				sortDirection={sortDirection}
				searchTerm={searchTerm}
				onSearch={onSearch}
				onSort={(newSortDirection, newSortColumn: TableFilter | string) => {
					setSortDirection(newSortDirection);
					setSortColumn(newSortColumn);
				}}
			/>
			{renderTableContent()}
		</table>
	);
}
