import React from 'react';
import { render } from '@testing-library/react';
import { SortDirection } from '../SortableHeader';
import TableHead from '.';

jest.mock('../SortableHeader/utils', () => ({
  getID: () => 123
}))

describe('TableHead', () => {
  it('Should match default Snapshot', () => {
    const { asFragment } = render(
      <TableHead
        columns={[{ dataName: 'name', displayName: 'Name' }]}
        onSearch={() => {}}
        onSort={() => {}}
        searchColumn="name"
        searchTerm=""
        sortColumn="name"
        sortDirection={SortDirection.Asc}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
