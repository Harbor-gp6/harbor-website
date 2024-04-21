import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <RouterProvider router={Router}/>
      <Footer />
    </>
  )
}

export default App
