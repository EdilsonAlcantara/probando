import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { ModulosProveedor } from './Controles/modulosContexto'
import ListadoModulos from './Vistas/ListadoModulos'
import { Check } from 'react-bootstrap-icons'
import TituloModulo from './Vistas/TituloModulo'

export default function Modulos() {
    return (
        <ModulosProveedor>
            <Container fluid>
                <TituloModulo />
                <ListadoModulos />
            </Container>
        </ModulosProveedor>
    )
}
