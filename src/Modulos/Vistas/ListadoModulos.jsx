import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useModulos } from '../Controles/useModulos';
import * as Icons from 'react-bootstrap-icons';

export default function ListadoModulos() {

    const { state, llenarModuloSeleccionado } = useModulos();

    const Icon = ({ iconName, ...props }) => {
        const BootstrapIcon = Icons[iconName];
        return <BootstrapIcon {...props} />;
    }

    return (
        <Row className="justify-content-center">
            {
                state.listado.map((app, index) => (
                    <Col sm={12} md={3} lg={3} key={index} className="m-2" style={{ textAlign: '-webkit-center' }}>
                        <Card style={{ width: '10rem', marginBottom: '80px' }} className="zoom-card mt-3" bg={''} onClick={() => llenarModuloSeleccionado(app)}>
                            {/* <a href={state.esProduccion ? app.link_produccion : app.link_desarrollo} target="_blank" rel="noopener noreferrer"> */}
                            {/* <Card.Img variant="top" src={`/${app.icon}.png`} /> */}
                            <div target="_blank" rel="noopener noreferrer">
                                <Icon
                                    iconName={app.icon}
                                    color="#00b7c3"
                                    size={100}
                                    className="align-top my-2"
                                />
                                <Card.Body>
                                    <Card.Text>
                                        {app.name}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            {/* </a> */}
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )

}
