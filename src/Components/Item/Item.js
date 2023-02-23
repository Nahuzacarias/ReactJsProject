import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import card from "./Item.css"


const Item = ({ prod }) => {
    return (
        <div className="centrar">
        <Card  style={{ width: '18rem' }}>
            <Card.Img src={prod.foto}/>
            
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                {prod.descripcion}
                </Card.Text>
                <Button variant="primary">Ver Detalles</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Item