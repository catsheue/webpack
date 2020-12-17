import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./Small'));

function Luna() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
