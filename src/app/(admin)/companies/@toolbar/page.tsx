import React from 'react';
import Toolbar from '@/app/app/components/Toolbar';
import AddCompanyButton from '@/app/app/components/AddCompanyButton';
import SearchInput from '@/app/app/components/SearchInput';

export default function Page() {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
