import Home from 'pages/Home';
import { Route, Routes, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <Routes suppressNoMatchWarning={true}>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
  // return <Home />;
};
