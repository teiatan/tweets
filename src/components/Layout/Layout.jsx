import { PageContainer } from 'components/PageContainer/PageContainer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <PageContainer>
      <header></header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </PageContainer>
  );
};