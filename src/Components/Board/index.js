import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function Board () {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Buenos Aires</Card.Title>
                <Card.Text>clear sky</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>°C</ListGroupItem>
                <ListGroupItem>Max: °C</ListGroupItem>
                <ListGroupItem>Min: °C</ListGroupItem>
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
