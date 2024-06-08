import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom"
import HomePage from '../pages/home/Home'
import Login from '../pages/login/Login'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Register from '../pages/register/Register'
import RegisterForm from '../pages/register/RegisterForm'
import Pedido from "../pages/pedido/Pedido"
import Home from '../pages/dashboard/home/Home'
import { InternSideNav } from '../components/InternSideNav/InternSideNav'
import { InterNav } from "../components/InternNavbar/InternNavbar"

const Layout = () => {
  const location = useLocation()
  const path = location.pathname
  const isInternPage = path.includes('dashboard')

  return (
    <>
      {!isInternPage && (
        <>
          {path === "/" && <Header />}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastrar' element={<Register />} />
            <Route path='/cadastro' element={<RegisterForm />} />
            <Route path='/pedido/:idPedido' element={<Pedido />} />
          </Routes>
          {path === "/" && <Footer />}
        </>
      )}
      {isInternPage && (
        <>
        <InterNav />
        <div className='w-screen h-screen flex overflow-x-hidden items-center justify-between '>

          <InternSideNav  />
          <Routes>
            <Route path='/dashboard/:idPrestador' element={<Home />} />
          </Routes>
        </div>
        </>
      )}
    </>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
