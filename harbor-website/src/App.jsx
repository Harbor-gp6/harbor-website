import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
