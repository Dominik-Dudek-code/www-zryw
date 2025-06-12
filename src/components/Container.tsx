import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`xs:max-w-[1348px] mx-auto px-[14px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
