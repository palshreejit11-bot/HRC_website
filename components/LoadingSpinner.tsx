import React from 'react';

const LoadingSpinner: React.FC<{ className?: string }> = ({ className = 'py-40' }) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-custom-red"></div>
  </div>
);

export default LoadingSpinner;
