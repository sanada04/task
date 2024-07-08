import React from 'react';

const Table = ({ children, className, ...props }) => (
  <div className={`overflow-x-auto ${className}`}>
    <table className="min-w-full divide-y divide-gray-200" {...props}>
      {children}
    </table>
  </div>
);

export default Table;

export const TableHead = ({ children, className, ...props }) => (
  <thead className={`bg-gray-50 ${className}`} {...props}>
    {children}
  </thead>
);

export const TableBody = ({ children, className, ...props }) => (
  <tbody className={`divide-y divide-gray-200 ${className}`} {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ children, className, ...props }) => (
  <tr className={className} {...props}>
    {children}
  </tr>
);

export const TableCell = ({ children, className, ...props }) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`} {...props}>
    {children}
  </td>
);