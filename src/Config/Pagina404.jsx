import React from 'react'
import { Link } from 'react-router'

export default function Pagina404() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <h1 className="display-1 text-danger">404</h1>
                <h2 className="text-muted">Página no encontrada</h2>
                <p className="lead">Lo sentimos, la página que buscas no existe.</p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        </div>
    )
}
