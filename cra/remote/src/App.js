import LocalButton from './Button';

const RemoteHeader = React.lazy(() => import('shared/Header'));
const RemoteFooter = React.lazy(() => import('shared/Footer'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Header">
      <RemoteHeader />
    </React.Suspense>
    <React.Suspense fallback="Loading Footer">
      <RemoteFooter />
    </React.Suspense>
  </div>
);

export default App;
