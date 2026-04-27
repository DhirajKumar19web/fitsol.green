import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
