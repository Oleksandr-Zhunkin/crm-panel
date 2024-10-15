import DashboardCard from '@/app/app/components/DashboardCard';
import SummaryTable from '@/app/app/components/SummaryTable';
import SummaryTableCell from '@/app/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/app/components/SummaryTableHeader';
import { getSummarySales } from '@/app/lib/api';
import React from 'react';

export default async function Page() {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
