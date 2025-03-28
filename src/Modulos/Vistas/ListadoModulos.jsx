import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useModulos } from '../Controles/useModulos';

export default function ListadoModulos() {

    const { state } = useModulos();

    return (
        <Row className="justify-content-center">

            {
                state.listado.map((app, index) => (
                    <Col sm={12} md={3} lg={3} key={index} className="m-5" style={{ textAlign: '-webkit-center' }}>
                        <Card style={{ width: '10rem' }} className="zoom-card mt-3" bg={''}>
                            <a href={app.link} target="_blank" rel="noopener noreferrer">
                                <Card.Img variant="top" src={`/${app.icon}.png`} />
                                <Card.Body>
                                    <Card.Text>
                                        {app.name}
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                ))
            }

        </Row>
    )

}
