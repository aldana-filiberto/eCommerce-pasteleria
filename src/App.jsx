import { useState, useEffect } from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito';
import NotFound from './pages/NotFound'
import DetalleProducto from './pages/DetalleProducto';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([])
  const [filtros, setFiltros] = useState({ tipo: '', nombre: '', masVendido: true })
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


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



  useEffect(() => {
    fetch('/productos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        const productosFiltrados = data.filter((producto) => {
          const porTipo = filtros.tipo ? producto.tipo === filtros.tipo : true;
          const porNombre = filtros.nombre ? producto.nombre.toLowerCase().includes(filtros.nombre.toLowerCase())
            : true;
          const porMasVendido = filtros.masVendido !== undefined
            ? producto.masVendido === filtros.masVendido
            : true;

          return porTipo && porNombre && porMasVendido;
        });

        setTimeout(() => {
          setProductos(productosFiltrados);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, [filtros]);




  return (
    <>
      <Routes>
        <Route path="/" element={<Home carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} productos={productos} cargando={cargando} error={error} setFiltros={setFiltros}/>} />
        
        <Route path="/productos" element={<Productos carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} productos={productos} cargando={cargando} error={error} setFiltros={setFiltros} />} />
        
        <Route path="/productos/:id" element={<DetalleProducto agregarProducto={agregarProducto} productos={productos} />} />
        
        <Route path="/carrito" element={<Carrito carrito={carrito} agregarProducto={agregarProducto} borrarProducto={borrarProducto} vaciarCarrito={vaciarCarrito} />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
