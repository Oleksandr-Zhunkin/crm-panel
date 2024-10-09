'use client';

import React from 'react';
import Button from '../../components/Button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}
const error = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default error;
