<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

#E-commerce React - Proyecto Final

## Descripción
Aplicación web de e-commerce desarrollada con React que permite a los usuarios navegar, ver productos, agregar items al carrito y realizar compras.

## Tecnologías Utilizadas
- **React 19.1.1** - Framework principal
- **React Router DOM 7.9.1** - Navegación
- **Firebase/Firestore** - Base de datos
- **Vite** - Herramienta de build
- **CSS3** - Estilos

## Funcionalidades Implementadas

### ✅ Listado y Detalle de Productos
- **ItemListContainer**: Contenedor que obtiene productos de Firestore
- **ItemDetailContainer**: Vista detallada de productos individuales
- **ItemCount**: Componente para seleccionar cantidad con validaciones
- Separación clara entre componentes contenedores y de presentación

### ✅ Navegación
- **React Router**: Navegación SPA sin recargas
- **NavBar**: Navegación entre secciones (Inicio, Productos, Categorías, Carrito)
- Rutas implementadas:
  - `/` - Página principal
  - `/productos` - Lista de todos los productos
  - `/categoria/:category` - Productos por categoría
  - `/producto/:id` - Detalle de producto
  - `/cart` - Carrito de compras
  - `/checkout` - Finalizar compra

### ✅ Carrito de Compras
- **Context API**: Gestión del estado del carrito
- **Cart**: Visualización del carrito con productos y totales
- **CartItem**: Item individual del carrito
- **CartWidget**: Icono con contador de items
- Funcionalidades:
  - Agregar/eliminar productos
  - Actualizar cantidades
  - Calcular totales
  - Persistencia durante la sesión

### ✅ Firebase/Firestore
- **Conexión**: Configuración de Firebase
- **Servicios**: Funciones para obtener productos
- **Órdenes**: Guardado de compras en Firestore
- **Consultas**: Por ID, categoría y listado general

### ✅ Experiencia de Usuario
- **Loaders**: Indicadores de carga
- **Mensajes condicionales**: "Carrito vacío", "Producto sin stock"
- **Validaciones**: Stock, cantidades mínimas
- **Feedback**: Confirmación de órdenes con ID

## Estructura de Componentes


## Configuración de Firebase

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDGKM493BtYyIHZyeFkXNETJ-5APDI8Lnk",
  authDomain: "react-coder-88065.firebaseapp.com",
  projectId: "react-coder-88065",
  storageBucket: "react-coder-88065.firebasestorage.app",
  messagingSenderId: "680484880299",
  appId: "1:680484880299:web:f7cf7b8cb3a1aa453b9cee"
};
```

## Estructura de Base de Datos

### Colección: `products`
```javascript
{
  id: "1",
  name: "Camiseta titular Boca Juniors",
  price: 11000,
  category: "Liga Profesional",
  year: "2021",
  stock: 6,
  imgFrontUrl: "https://raw.githubusercontent.com/...",
  imgBackUrl: "https://raw.githubusercontent.com/..."
}
```

### Colección: `orders`
```javascript
{
  buyer: {
    name: "Juan Pérez",
    email: "juan@email.com",
    phone: "1234567890",
    address: "Calle 123, Ciudad"
  },
  items: [...],
  total: 22000,
  date: Timestamp
}
```

## Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Instalar Firebase**:
   ```bash
   npm install firebase
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Build para producción**:
   ```bash
   npm run build
   ```

## Características Técnicas

- **Responsive Design**: Adaptable a móviles y desktop
- **Context API**: Gestión de estado global del carrito
- **Firebase Integration**: Base de datos en la nube
- **Error Handling**: Manejo de errores y estados de carga
- **SEO Friendly**: URLs semánticas con React Router

## Convenciones de Código

- **Nomenclatura**: camelCase para variables y funciones
- **Componentes**: PascalCase
- **Archivos**: PascalCase para componentes, camelCase para utilidades
- **Estructura**: Separación de responsabilidades (containers/presentational)

## Autor
Desarrollado como proyecto final del curso de React en Coderhouse.
