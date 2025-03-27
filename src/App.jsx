import { useEffect, useState } from 'react'
import datos from './Datos/datos.json'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
function App() {

    const [aplicaciones, setAplicaciones] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            setAplicaciones(datos);
        };
        cargarDatos();
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '' }}>
            <Row className="mb-4 w-100">
                <Col className="text-center">
                    <h1>Modulos Disponibles</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {aplicaciones.map((app, index) => (
                    <Col key={index} xs={12} sm={6} md={6} className="mb-5">
                        <Card className="text-center zoom-card">
                            <Card.Body>
                                <a href={app.link} target="_blank" rel="noopener noreferrer">
                                    <div className="mb-3">
                                        <img src={"/" + app.icon + '.png'} alt={app.name} className="img-fluid" style={{ width: '150px', height: '150px' }} />
                                    </div>
                                    <Card.Title>{app.name}</Card.Title>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default App
