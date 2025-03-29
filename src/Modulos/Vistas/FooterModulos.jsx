import React from 'react'
import PropTypes from "prop-types";
import { Container, Navbar } from "react-bootstrap";

export default function FooterModulos({ backgroundClass = "bg-light" }) {
    return (
        <Navbar className={backgroundClass} fixed={"bottom"}>
            <Container fluid>
                <Navbar.Brand className="fw-medium">
                    Copyright © {new Date().getFullYear()} {import.meta.env.VITE_APP_EMPRESA_NOMBRE}
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

FooterModulos.propTypes = {
    backgroundClass: PropTypes.string,
};
