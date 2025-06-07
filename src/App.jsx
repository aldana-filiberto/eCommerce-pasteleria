import { Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound'
import DetalleProducto from './pages/DetalleProducto';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
