// Importación de la librería de React Boostrap
import Card from 'react-bootstrap/Card';
// Importación de los componentes de React Boostrap
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Spinner from 'react-bootstrap/Spinner';

// Importación Hooks desde la librería de React
import React,{useState,useEffect,useRef} from 'react';
import { COMPLETIONSTATEMENT_TYPES } from '@babel/types';

function Board () {

    // Valores Iniciales de los Estados del Componente
    let [city,setCity] = useState('Buenos Aires');
    let [country,setCountry] = useState('Argentina');
    let [currentTemperature,setCurrentTemperature] = useState('');
    let [thermalSensation,setThermalSensation] = useState('');
    let [minimumTemperature,setMinimumTemperature] = useState('');
    let [maximumTemperature,setMaximumTemperature] = useState('');
    let [description,setDescription] = useState('');

    // El valor inicial es true, luego cuando termina de cargar el componente es false más adelante
    let [loading,setIsLoading] = useState(true); 
    

    // Definir que pasa cuando el componente se está recién montando
    useEffect(()=> {

        // Se hace la consulta a la API
            // El pedido debe ser asincrónico, dado que puede tardar un tiempo la respuesta desde la consulta hasta el envío de la información de la API
            const getData = async () => {
            // Se debe pasar la ciudad y la Key dada por la API para cada usuario que consuma la misma.
            // El proceso queda on hold hasta no recibir los datos de la API, para luego poder seguir.
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e238318f3dd4a4e1599919b9f3fbc192`)

            // Requiero esperar para poder recibir los datos que envíe la API y convertirlos a un formato json, para poder luego utilizarlo como un Objeto Literal con key y valores.
            let data = await response.json();

            // Como es una función debo retornar algo. En este caso debo retornar los datos resultado de la consulta de la API
            return data;
        }

        // Debo disparar la acción de consulta a la API al momento de montar el componente
        getData().then(data => {

            // Seteo los nuevos valores de los estados del componente a partir de los valores obtenidos de la API
            setMaximumTemperature(data.main.temp_max);
            setMinimumTemperature(data.main.temp_min);
            setCurrentTemperature(data.main.temp);
            setThermalSensation(data.main.feels_like);
            setDescription(data.weather[0].description)

            // Una vez que termina de obtenerse y renderizarse la información de la API en el componente cambia de estado a false para que no aparezca el  spinner
            setIsLoading(false);
        })

    },[])

    return (
        <div>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/imagen-clima.jpg" />
            <Card.Body>
                <Card.Title>{city}, {country}</Card.Title>
                {loading && <Spinner animation="border" />}
                
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>{currentTemperature}°C</b></ListGroupItem>
                <ListGroupItem>Thermal Sensation: {thermalSensation}°C</ListGroupItem>
                <ListGroupItem>Max: {maximumTemperature}°C</ListGroupItem>
                <ListGroupItem>Min: {minimumTemperature}°C</ListGroupItem>
            </ListGroup>

            </Card>
            
        </div>
    )
}

export default Board;
