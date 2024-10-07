import React from 'react';
import Header from '../../components/Header';

export interface PageProps {
  params: { id: string[] };
}

const page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toISOString()}</p>
    </>
  );
};

export default page;
