'use client';

import Header from '@/app/app/components/Header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id[0]);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toISOString()}</p>
    </>
  );
};

export default Page;
