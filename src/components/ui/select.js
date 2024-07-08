import React from 'react';

const Select = ({ label, options, className, ...props }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">{label}</label>
    <select
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;