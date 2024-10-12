'use client';

import React from 'react';

export interface ErrorProps {
  error: Error;
}

const error = ({}) => {
  return <div>Unexpected error</div>;
};

export default error;
