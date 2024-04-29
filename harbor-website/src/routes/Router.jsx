import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from '../pages/home/Home';
import Login from '../pages/login/Login';
import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path !== "/login" && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {path !== "/login" && <Footer />}
    </>
  );
};

export default function Router() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
