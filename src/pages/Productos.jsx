
import Header from '../componentes/static/Header'
import ListaProductos from '../componentes/ListaProductos'
import Footer from '../componentes/static/Footer'
import CuadroBusqueda from '../componentes/CuadroBusqueda'
import ProductCard from '../componentes/ProductCard'

const Productos = () => {
    return (
        <div>
            <Header />
            <h3 className='product-title'>Todos nuestros productos</h3>
            <CuadroBusqueda/>
            <ListaProductos Component={ProductCard} cantidadItems={10} />
            <Footer />
        </div>
    )
}

export default Productos
