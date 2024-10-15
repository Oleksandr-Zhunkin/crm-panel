import AddPromotionButton from '@/app/app/components/AddPromotionButton';
import SearchInput from '@/app/app/components/SearchInput';
import Toolbar from '@/app/app/components/Toolbar';
import { notFound } from 'next/navigation';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  if (!params.id) {
    notFound();
  }
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
