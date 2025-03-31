import React from 'react'
import { Container } from 'react-bootstrap'
import { ModulosProveedor } from './Controles/modulosContexto'
import FooterModulos from './Vistas/FooterModulos'
import ListadoModulos from './Vistas/ListadoModulos'
import TituloModulo from './Vistas/TituloModulos'
import ModuloMinimizado from './Modales/ModuloMinimizado'

export default function Modulos() {
    return (
        <ModulosProveedor>
            <Container fluid>
                <ModuloMinimizado />
                <TituloModulo />
                <ListadoModulos />
                <FooterModulos />
            </Container>
        </ModulosProveedor>
    )
}
