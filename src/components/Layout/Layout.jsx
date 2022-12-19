import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';

function Layout() {
  return (
    <>
      <header>{<NavBar />}</header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
