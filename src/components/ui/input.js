import React from 'react';

const Input = ({ label, className, ...props }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">{label}</label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    />
  </div>
);

export default Input;