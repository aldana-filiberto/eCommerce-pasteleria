import { Routes, Route, Router } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import './App.css'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import Login from './pages/Login'
import DetalleProducto from './pages/DetalleProducto';
import RutaProtegida from './auth/RutasProtegidas';

function App() {

  const {isAuth, setIsAuth } = useContext(CartContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path='/login' element={ <RutaProtegida isAuthenticated={isAuth}> <Login/> </RutaProtegida>} />
        <Route path='/admin' element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
