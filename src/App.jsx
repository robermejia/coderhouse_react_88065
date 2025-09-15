import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import './App.css'

function App() {

  return (
    <>
      <NavBar /> 
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  )
}

export default App
