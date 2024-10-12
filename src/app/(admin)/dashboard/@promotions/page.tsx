import DashboardCard from '@/app/app/components/DashboardCard';
import SummaryTable from '@/app/app/components/SummaryTable';
import SummaryTableCell from '@/app/app/components/SummaryTableCell';
import SummaryTableHeader from '@/app/app/components/SummaryTableHeader';
import { getSummaryPromotions } from '@/app/lib/api';
import React from 'react';

export default async function Page() {
  const data = await getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
