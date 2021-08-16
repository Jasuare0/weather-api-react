// Importación de la librería de React Boostrap
import Card from 'react-bootstrap/Card';
// Importación de los componentes de React Boostrap
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

// Importación Hooks
import React,{useState,useEffect,useRef} from 'react';

function Board () {

    // Valores Iniciales de los Estados del Componente
    let [city,setCity] = useState('Buenos Aires');
    let [country,setCountry] = useState('Argentina');
    let [currentTemperature,setcurrentTemperature] = useState(25);
    let [minimumTemperature,setMinimumTemperature] = useState(10);
    let [maximumTemperature,setMaximumTemperature] = useState(20);

    return (
        <div>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{city}, {country}</Card.Title>
                <Card.Text>clear sky</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>{currentTemperature}°C</b></ListGroupItem>
                <ListGroupItem>Max: {maximumTemperature}°C</ListGroupItem>
                <ListGroupItem>Min: {minimumTemperature}°C</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default Board;
