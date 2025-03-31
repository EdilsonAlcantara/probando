import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useModulos } from '../Controles/useModulos'

export default function TituloModulos() {

    const { state, dispatch, actualizarPropiedades } = useModulos();

    return (

        <Row className="mb-2" style={{ position: 'sticky', top: 0, zIndex: 1300, background: '#00b7c3' }}>
            <Col className="text-left text-white my-2">
                <h1>Módulos</h1>
            </Col>
            <Col>
                <Form.Group className="my-4" controlId="visualizarLocal">
                    <div style={{ float: 'right' }}>
                        <Form.Check
                            type="switch"
                            id="visualizarLocal"
                            label="Visualizar"
                            checked={state.esVisualizarLocal}
                            onChange={(e) => actualizarPropiedades('esVisualizarLocal', e.target.checked)}
                        />
                        <Form.Check
                            type="switch"
                            id="esProduccionSwitch"
                            label="Produccion"
                            checked={state.esProduccion}
                            onChange={(e) => actualizarPropiedades('esProduccion', e.target.checked)}
                        />
                    </div>
                </Form.Group>
            </Col>
        </Row>

    )
}
