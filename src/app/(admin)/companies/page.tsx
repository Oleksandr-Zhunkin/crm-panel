import React from 'react';
import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import AddCompanyButton from '../../components/AddCompanyButton';
import SearchInput from '../../components/SearchInput';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import { Status } from '../../components/StatusLabel';

const page = () => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
};

export default page;
