import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <>
        <h2 className='welcome-phrase'>Bienvenido <strong>{props.greeting}</strong>!</h2>
        </>
    );
  }

  export default ItemListContainer;