import './ItemListContainer.css';
const ItemListContainer = ({ greeting }) => {
  return (
    <section>
      <h2>{greeting}</h2>
      {/* Aquí puedes agregar la lista de productos en el futuro */}
    </section>
  );
};

export default ItemListContainer;