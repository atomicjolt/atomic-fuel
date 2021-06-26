import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoryWrapper from '../StoryWrapper';
import { Table, TableFilter, Props } from '.';
import { TableRow } from '../TableRow';

export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<Props> = (args) => (
  <StoryWrapper>
    <Table {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
const defaultColumns = [
	{ dataName: TableFilter.name, displayName: 'NAME' },
	{ dataName: TableFilter.dueAt, displayName: 'DUE' },
	{ dataName: TableFilter.createdAt, displayName: 'CREATED' },
	{ dataName: TableFilter.completed, displayName: 'COMPLETED' },
	{ dataName: 'actions', displayName: 'actions', hidden: true },
]

Default.args = {
	columns: defaultColumns,
	searchTerm: 'Hello World',
	searchColumn: TableFilter.name,
	onSearch: () => console.log('Sup'),
	renderTableContent: (one = 'one', two = 2, three = 'III') => (
		<tbody>
			<tr>
				<td>{one}</td>
				<td>{two}</td>
				<td>{three}</td>
				<td>四</td>
				<td>E</td>
			</tr>
		</tbody>
	)
};
