import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

function App() {
  const HomePage = lazy(() => import('../pages/Home'));
  const TweetsPage = lazy(() => import('../pages/Tweets'));
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
  );
}

export default App;
