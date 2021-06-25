import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import StoryWrapper from '../_StoryWrapper';
import SortableHeader, { Props, SortDirection } from '.';

export default {
  title: 'SortableHeader',
  component: SortableHeader,
} as Meta;

const Template: Story<Props> = (args) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortDirection, setSortDirection] = useState(SortDirection.Asc);
  const [sortColumn, setSortColumn] = useState('createdAt');

  args.onSearch = (newSearchTerm: string) => setSearchTerm(newSearchTerm);
  args.onSort = (newSortDirection: SortDirection, newSortColumn: string) => {
    setSortDirection(newSortDirection);
    setSortColumn(newSortColumn);
  };

  args.currentPath = sortColumn;
  args.currentDirection = sortDirection;
  args.searchTerm = searchTerm;

  return (
    <StoryWrapper>
      <table>
        <thead>
          <tr>
            <SortableHeader {...args} />
          </tr>
        </thead>
      </table>
    </StoryWrapper>
  );
}

export const Default = Template.bind({});
Default.args = {
  ariaName: "Name",
  sortPath: "name",
  searchable: true,
  searchTitle: "Name",
  searchResultCount: 0,
  children: "Name"
};
