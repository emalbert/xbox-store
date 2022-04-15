import './Item.css';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({id, title, pictureUrl}) => {
    
    return (
        <>
        <Card className='item-card'>
            <Card.Img src={pictureUrl} alt='' /> 
            <Card.Body>
                <Card.Title className="text-center">{title}</Card.Title>
                <div className="d-grid gap-2">
                    <Link className="text-center" to={`/item/${id}`}>Ver Detalles</Link>    
                </div>
            </Card.Body>
        </Card>
        </>
    );
}

export default Item;