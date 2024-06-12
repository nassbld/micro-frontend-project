import React from 'react';

import Card from './Card';



const RemoteButton = React.lazy(() => import('remote/Button'));
const SharedHeader = React.lazy(() => import('shared/Header'));
const SharedFooter = React.lazy(() => import('shared/Footer'));


const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <SharedHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <Card text="I am host"/>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>

    <React.Suspense fallback="Loading Footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

export default App;
