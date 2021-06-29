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

const Table1 = composeTable<FilterType>();
export default {
  title: 'Table',
  component: Table1,
} as Meta;

const Template1: Story<Props<FilterType>> = (args) => (
  <StoryWrapper>
    <Table1 {...args} />
  </StoryWrapper>
);

export const Default = Template1.bind({});
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

enum FilterType2 {
	product = 'product',
	calories = 'calories',
	fat = 'fat',
	sugar = 'sugar',
	protien = 'protien',
	carbs = 'carbs',
}

const Table2 = composeTable<FilterType2>();

const Template2: Story<Props<FilterType2>> = (args) => (
  <StoryWrapper>
    <Table2 {...args} />
  </StoryWrapper>
);

export const TableTwo = Template2.bind({});
const defaultColumns2 = [
	{ dataName: FilterType2.product, displayName: 'PRODUCT' },
	{ dataName: FilterType2.calories, displayName: 'CALORIES' },
	{ dataName: FilterType2.fat, displayName: 'FAT' },
	{ dataName: FilterType2.sugar, displayName: 'SUGAR' },
	{ dataName: FilterType2.protien, displayName: 'PROTIEN' },
	{ dataName: FilterType2.carbs, displayName: 'CARBS' },
]

TableTwo.args = {
	columns: defaultColumns2,
	searchTerm: 'Hello World',
	searchColumn: FilterType2.product,
	onSearch: () => console.log('Sup'),
	renderTableContent: (one = 'one', two = 2, three = 'III') => (
		<tbody>
			<tr>
				<td>{one}</td>
				<td>{two}</td>
				<td>{three}</td>
				<td>四</td>
				<td>E</td>
				<td>VI</td>
			</tr>
		</tbody>
	)
};