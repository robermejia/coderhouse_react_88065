<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

# 🛒 E-commerce React - Proyecto Final

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://coderhouse-react-88065.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)

## 👁️ Vista Previa
![Preview](https://robermejia.com/img/portfolio/large/project-10/1.png)

## 📝 Descripción
Aplicación web de e-commerce desarrollada con **React 19** que permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, gestionar un carrito de compras y finalizar pedidos con persistencia en **Firebase Firestore**.

## 🚀 Demo en Vivo
Puedes ver el proyecto desplegado aquí: [https://coderhouse-react-88065.vercel.app/](https://coderhouse-react-88065.vercel.app/)

## 🛠️ Tecnologías Utilizadas
- **React 19.1.1** - Framework principal (Hooks, Context API)
- **React Router DOM 7.9.1** - Navegación SPA
- **Firebase 12.3.0** - Backend as a Service (Firestore)
- **Vite** - Herramienta de construcción y desarrollo
- **CSS3** - Estilos personalizados y Responsive Design

## ✨ Funcionalidades

### 📦 Gestión de Productos
- **Catálogo Dinámico**: Obtención de datos en tiempo real desde Firestore.
- **Detalle de Producto**: Vista expandida con información técnica y stock.
- **Filtros por Categoría**: Navegación segmentada para una mejor búsqueda.

### 🛒 Carrito de Compras
- **Estado Global**: Implementado con Context API para persistencia entre rutas.
- **Control de Cantidades**: Validación automática contra el stock disponible.
- **Resumen de Compra**: Cálculo automático de subtotales y total general.

### 💳 Checkout y Órdenes
- **Formulario de Contacto**: Validación de datos del comprador.
- **Generación de Orden**: Creación de documentos únicos en Firestore con ID de seguimiento.
- **Feedback al Usuario**: Notificación de éxito con el número de orden generado.

---

## 📂 Estructura de Componentes

```
src/
 ├── components/
 │    ├── Cart/                 # Vista y lógica del carrito
 │    ├── CheckoutForm/         # Formulario de finalización
 │    ├── ItemCount/            # Selector de cantidad con lógica de stock
 │    ├── ItemDetailContainer/  # Lógica de carga para detalle
 │    ├── ItemListContainer/    # Lógica de carga para listas
 │    ├── NavBar/               # Navegación principal y CartWidget
 │    ├── ProductCard/          # Representación visual de cada item
 │    └── category/             # Componentes de filtrado
 ├── context/                   # CartContext para estado global
 ├── firebase/                  # Configuración de SDK
 └── services/                  # Capa de abstracción para Firestore
```

---

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Build para producción**:
   ```bash
   npm run build
   ```

---

## 🤝 Autor
**Roberto Agustín Mejía Collazos**  
*Proyecto Final - Curso de React en Coderhouse*

---
© 2026 Roberto Mejía. Todos los derechos reservados.
