import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound'

function App() {
  const [carrito, setCarrito] = useState([])
  // const [filtro, setFiltro] = useState({ tipo: '', nombre: '', masVendido: true })

  const agregarProducto = (producto) => {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
      setCarrito(carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };



  const borrarProducto = (id) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === id) {
        if (item.cantidad > 1) {
          return { ...item, cantidad: item.cantidad - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null);

    setCarrito(nuevoCarrito);
  };


  const vaciarCarrito = () => {
    setCarrito([]);
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}  />} />
        <Route path="/productos" element={<Productos carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito}  />} />
        
        <Route path="/carrito" element={<Carrito carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
