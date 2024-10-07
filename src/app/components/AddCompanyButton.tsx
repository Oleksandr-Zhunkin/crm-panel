'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import Button from './Button';

const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
