import DashboardCard from '@/app/app/components/DashboardCard';
import StatCard, { StatCardType } from '@/app/app/components/StatCard';
import { getCategories, getCompanies } from '@/app/lib/api';
import getCountById from '@/app/lib/utils/getCountById';
import React from 'react';

export default async function Page() {
  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
