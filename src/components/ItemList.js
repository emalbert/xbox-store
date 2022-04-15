import './ItemList.css';
import Item from './Item';

const ItemList = ({itemArr}) => {
    return (
        <div className='contenedor-items'>
        {
            itemArr.length > 0
            ? itemArr.map( itemArr => <Item id={itemArr.id} category={itemArr.category} categoryId={itemArr.categoryId} title={itemArr.title} description={itemArr.description} price={itemArr.price} pictureUrl={itemArr.pictureURL[0]} />)
            : <p>Wait for it...</p>
}
        </div>
    );
}

export default ItemList;