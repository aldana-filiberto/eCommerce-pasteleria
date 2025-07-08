import { Routes, Route, Router } from 'react-router-dom';
// import './App.css'
import Home from './pages/Home'
import Productos from './pages/Productos'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import DetalleProducto from './pages/DetalleProducto';
import Login from './pages/Login'
import Contacto from './pages/Contacto'
import RutaProtegida from './auth/RutasProtegidas';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<RutaProtegida> <Admin/> </RutaProtegida>} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
