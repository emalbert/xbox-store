import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <h2 className='welcome-phrase'><strong>{props.greeting}</strong></h2>
        <ItemCount stock="5" initial="1" />
        </>
    );
  }

  export default ItemListContainer;