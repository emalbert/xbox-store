import './ItemList.css';
import Item from './Item';

const ItemList = ({itemArr}) => {
    return (
        <div className='contenedor-items'>
        {
            itemArr.length > 0
            ? itemArr.map( itemArr => <Item key={itemArr.id} title={itemArr.title} description={itemArr.description} price={itemArr.price} pictureUrl={itemArr.pictureURL[0]} />)
            : <p>Wait for it...</p>
}
        </div>
    );
}

export default ItemList;