import React from 'react';

const CommonWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto p-4'>
      {children}
    </div>
  );
};

export default CommonWrapper;