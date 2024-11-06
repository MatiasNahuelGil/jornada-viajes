import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Header from './components/Header/Header'
import TravelPackages from './pages/TravelPackages/TravelPackages'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import DestinationDetail from './pages/Destinations/Destination'
import Cart from './components/Cart/Cart'
import HotelDetail from './components/HotelDetails/HotelDetail'




function App() {

  return (
    <>
      <BrowserRouter>
            <Header/>
            
            <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/blog' element={<Blog />} />
              <Route path='/paquetes' element={<TravelPackages />} />
              <Route path='/contacto' element={<Contact />} />
              <Route path='/destination/:destinationId' element={<DestinationDetail/>} />
              <Route path="/hotel/:hotelId" element={<HotelDetail/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
            
            <Footer/>
         </BrowserRouter>
    </>
  )
}

export default App
