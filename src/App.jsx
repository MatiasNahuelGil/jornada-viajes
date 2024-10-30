import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Paquetes from './components/Paquetes/Paquetes'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'



function App() {

  return (
    <>
      <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/blog' element={<Blog />} />
              <Route path='/paquetes' element={<Paquetes />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
            <Footer/>
         </BrowserRouter>
    </>
  )
}

export default App
