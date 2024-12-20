import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { getCompanies } from '@/app/lib/api';
import CompanyTable from '../../components/CompanyTable';



export default async function Page() {

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);
  
  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}