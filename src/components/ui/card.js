import React from 'react';

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardActions = ({ children, className, ...props }) => (
  <div className={`mt-4 ${className}`} {...props}>
    {children}
  </div>
);