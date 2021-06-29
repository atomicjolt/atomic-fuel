import React from 'react';
import { render } from '@testing-library/react';
import { SortDirection } from '../Table';
import { TableHead } from '.';

jest.mock('../SortableHeader/utils', () => ({
  getID: () => 123
}))

describe('TableHead', () => {
  it('Should match default Snapshot', () => {
    const { asFragment } = render(
      <table>
        <TableHead
          columns={[{ dataName: 'name', displayName: 'Name' }]}
          onSearch={() => {}}
          onSort={() => {}}
          searchColumn="name"
          searchTerm=""
          sortColumn="name"
          sortDirection={SortDirection.asc}
        />
      </table>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
