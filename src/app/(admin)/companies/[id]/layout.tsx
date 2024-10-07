import React from 'react';
import Sidebar from '../../components/Sidebar';

export interface LayoutProps {
  children?: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default layout;
