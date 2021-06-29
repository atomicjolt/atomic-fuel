import React, { useState } from 'react';
import { composeTableHead } from '../TableHead';
import './styles.css';

export enum SortDirection {
  asc = 'ASC',
  desc = 'DESC',
}

export type ColumnType<T extends string | number> = {
	dataName: T
	displayName: string
	hidden?: boolean
}

export interface Props<T extends string | number> {
	columns: ColumnType<T>[]
	defaultSortColumn: T
	searchTerm: string
	searchColumn: T
	headClasses?: string
	onSearch: (arg: string) => void
	renderTableContent: (...arg: any[]) => any
}

export const composeTable = <T extends string | number>() => {
	const TableHead = composeTableHead<T>();
	return ({
		columns,
		searchTerm,
		searchColumn,
		headClasses,
		defaultSortColumn,
		onSearch,
		renderTableContent,
	}: Props<T>) => {
		const [sortColumn, setSortColumn] = useState<T>(defaultSortColumn);
		const [sortDirection, setSortDirection] = useState(SortDirection.asc);

		return (
			<table className="aj-table">
				<TableHead
					columns={columns}
					classes={headClasses}
					searchColumn={searchColumn}
					sortColumn={sortColumn}
					sortDirection={sortDirection}
					searchTerm={searchTerm}
					onSearch={onSearch}
					onSort={(newSortDirection: SortDirection, newSortColumn: T) => {
						setSortDirection(newSortDirection);
						setSortColumn(newSortColumn);
					}}
				/>
				{renderTableContent()}
			</table>
		);
	}
}