import React from 'react';
import PropTypes from 'prop-types';

// Used to wrap string (or other content) in a tbody tags
// For displaying it within a table
// Specify colums to the number of columns of the table
// so it can span the entire content
const TableTextBody = ({
  className, columns, children
}) => (
  <tbody className={className}>
    <tr>
      <td colSpan={columns}>{children}</td>
    </tr>
  </tbody>
);

TableTextBody.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default TableTextBody;
