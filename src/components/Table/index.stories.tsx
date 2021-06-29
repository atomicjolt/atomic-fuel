import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoryWrapper from '../StoryWrapper';
import { composeTable, Props } from '.';
import { TableRow } from '../TableRow';

enum FilterType {
	name = 'name',
	dueAt = 'dueAt',
	createdAt = 'createdAt',
	completed = 'completed',
}

const Table = composeTable<FilterType>();
export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<Props<FilterType>> = (args) => (
  <StoryWrapper>
    <Table {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
const defaultColumns = [
	{ dataName: FilterType.name, displayName: 'NAME' },
	{ dataName: FilterType.dueAt, displayName: 'DUE' },
	{ dataName: FilterType.createdAt, displayName: 'CREATED' },
	{ dataName: FilterType.completed, displayName: 'COMPLETED' },
	{ dataName: 'actions', displayName: 'actions', hidden: true },
]

Default.args = {
	columns: defaultColumns,
	searchTerm: 'Hello World',
	searchColumn: FilterType.name,
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
