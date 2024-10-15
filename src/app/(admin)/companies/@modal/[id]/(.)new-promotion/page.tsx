'use client';

import React from 'react';
import { notFound, useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/app/components/PromotionFormModal';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  if (!params.id) {
    notFound();
  }
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
