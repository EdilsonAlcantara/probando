import React from 'react';
import { Modal } from 'react-bootstrap';
import { useModulos } from '../Controles/useModulos';

export default function ModuloMinimizado() {

    const { state, cerrarModalModulos } = useModulos();

    return (
        <Modal
            show={state.mostrarModalModulos}
            onHide={cerrarModalModulos}
            fullscreen
            style={{ marginTop: '70px'}}
        >

            <Modal.Header closeButton>
                <Modal.Title>{state.moduloSeleccionado.titulo}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <iframe
                    id={state.moduloSeleccionado.titulo}
                    title={state.moduloSeleccionado.titulo}
                    width="100%"
                    height="100%"
                    src={state.moduloSeleccionado.ruta}
                >
                </iframe>
            </Modal.Body>

        </Modal>
    )
}
