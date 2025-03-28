import React from 'react'
import { Container } from 'react-bootstrap'
import { ModulosProveedor } from './Controles/modulosContexto'
import FooterModulos from './Vistas/FooterModulos'
import ListadoModulos from './Vistas/ListadoModulos'
import TituloModulo from './Vistas/TituloModulos'

export default function Modulos() {
    return (
        <ModulosProveedor>
            <Container fluid>
                <TituloModulo />
                <ListadoModulos />
                <FooterModulos />
            </Container>
        </ModulosProveedor>
    )
}
