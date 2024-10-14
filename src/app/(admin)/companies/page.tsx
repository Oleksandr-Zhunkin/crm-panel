import React from 'react';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '../../components/StatusLabel';

export default function Page() {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
