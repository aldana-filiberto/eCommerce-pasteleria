# 🎂 eCommerce de Pastelería

Este es un proyecto de eCommerce desarrollado en **React**, orientado a una pastelería. Permite a los usuarios navegar por productos, agregarlos al carrito, y cuenta con un **panel de administración protegido** donde se pueden realizar operaciones CRUD sobre los productos mediante **MockAPI**.

---

## 🚀 Funcionalidades Principales

### 🛍️ Cliente
- Visualización de productos con imagen, nombre, descripción y precio.
- Barra de búsqueda para encontrar productos por nombre, categoria o popularidad.
- Paginación para mejorar la experiencia de navegación.
- Carrito de compras con:
  - Agregado, eliminación y conteo de productos.
  - Cálculo automático del total.
- **Notificaciones** con [React Toastify](https://fkhadra.github.io/react-toastify/).
- **Alertas elegantes** con [SweetAlert](https://sweetalert2.github.io/).
- Iconografía con [React Icons](https://react-icons.github.io/react-icons/).

### 🔐 Autenticación y Seguridad
- **Autenticación de usuarios.**
- **Rutas protegidas** para evitar acceso no autorizado al panel de administrador.

### 🛠️ Panel de Administración
- CRUD completo de productos (Crear, Leer, Actualizar y Eliminar).
- Consumo de datos desde **MockAPI**.
- Gestión de productos en tiempo real.

---

## 🧪 Tecnologías Utilizadas

- **React**
- **React Router DOM**
- **Context API** (manejo global de estados: carrito, admin, etc.)
- **SweetAlert2**
- **React Toastify**
- **React Icons**
- **Bootstrap**
- **MockAPI** (para persistencia simulada de datos)
- **Vite**
- **CSS** personalizado

---

## 📦 Instalación y Uso

### 1. Clonar el repositorio

### 2. Bash
```
git clone https://github.com/aldana-micaela/eCommerce-pasteleria.git

npm install

npm run dev
```
