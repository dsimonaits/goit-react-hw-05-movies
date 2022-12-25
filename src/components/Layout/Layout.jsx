import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import NavBar from 'components/NavBar/NavBar';
import { Header } from './Layout.styled';
import Footer from 'components/Footer/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function Layout() {
  return (
    <>
      <Header>{<NavBar />}</Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
        <ScrollToTop />
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
