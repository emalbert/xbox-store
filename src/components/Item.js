import './Item.css';
import {Card, Button} from 'react-bootstrap';
import ItemCount from './ItemCount';

const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <>
        
        <Card className='item-card'>
            <Card.Img src={pictureUrl} alt='' /> 
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Precio: ${price}</Card.Subtitle>
                <ItemCount initial='1' stock='5' />
                <div className="d-grid gap-2">
                    <Button className='btn-principal' size="lg">
                        Agregar al carrito
                    </Button>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}

export default Item;