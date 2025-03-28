import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ModulosProveedor } from './Controles/modulosContexto'
import ListadoModulos from './Vistas/ListadoModulos'

export default function Modulos() {
    return (
        <ModulosProveedor>
            <Container fluid>
                <Row className="mb-2" style={{ position: 'sticky', top: 0, zIndex: 1300, background: '#00b7c3' }}>
                    <Col className="text-center text-white my-2">
                        <h1>Módulos</h1>
                    </Col>
                </Row>
                <ListadoModulos />
            </Container>
        </ModulosProveedor>
    )
}
