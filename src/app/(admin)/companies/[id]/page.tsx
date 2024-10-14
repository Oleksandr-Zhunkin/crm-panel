'use client';

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
      <div className="py-6 px-10">
        <p>{`Information about company (${params.id})`}</p>
      </div>
    </>
  );
};

export default Page;
