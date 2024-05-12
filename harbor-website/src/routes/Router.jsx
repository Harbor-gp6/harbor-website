import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import HomePage from '../pages/home/Home';
import Login from '../pages/login/Login';
import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Register from '../pages/register/Register'
import RegisterForm from '../pages/register/RegisterForm'
import Pedido from "../pages/pedido/Pedido";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path !== "/login" && path !== '/cadastrar' && path !== '/cadastro' && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrar' element={<Register />} />
        <Route path='/cadastro' element={<RegisterForm />} />
        <Route path='/pedido' element={<Pedido />} />
      </Routes>
      {path !== "/login" && path !== '/cadastrar' && path !== '/cadastro' && <Footer />}
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
