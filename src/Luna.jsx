import React, { Suspense } from "react";
import ReactDOM from "react-dom";

const OtherComponent = React.lazy(() =>
  import(/* webpackChunkName: "Luna/Small" */ "./Small.jsx")
);

function Luna() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

ReactDOM.render(<Luna />, document.getElementById("cuteluna"));
