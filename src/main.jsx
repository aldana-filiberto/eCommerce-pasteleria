import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { AdminProvider } from './context/AdminContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { ToastContainer, toast } from "react-toastify";
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <AdminProvider>
              <App />
              <ToastContainer position="bottom-right"/>
            </AdminProvider>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </Router>
  </StrictMode>,
)
