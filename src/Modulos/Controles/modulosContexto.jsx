import { createContext, useEffect, useReducer } from "react";
import datos from '../Modelos/datos.json';
import { EstadoInicialModulos } from "../Modelos/EstadoInicialModulos";
import { modulosReducer } from "./ModulosReducer";

export const ModulosContexto = createContext(null);

export const ModulosProveedor = ({ children }) => {

    const [state, dispatch] = useReducer(modulosReducer, EstadoInicialModulos);

    const actualizarPropiedades = (id, value) => {
        dispatch({ type: 'setPropiedad', payload: { id, value } });
    };

    const llenarModuloSeleccionado = (app) => {
        
        const moduloSeleccionado = {
            titulo: app.name,
            ruta: state.esProduccion ? app.link_produccion : app.link_desarrollo
        }
        mostrarModalModulos();
        dispatch({ type: 'llenarModuloSeleccionado', payload: { moduloSeleccionado } });
    };

    const cargarDatos = () => {
        actualizarPropiedades('listado', datos);
    };

    const mostrarModalModulos = () => {
        actualizarPropiedades('mostrarModalModulos', true);
    }

    const cerrarModalModulos = () => {
        actualizarPropiedades('mostrarModalModulos', false);
    }

    useEffect(() => {
        cargarDatos();
    }, [datos]);

    return (
        <ModulosContexto.Provider value={{ state, dispatch, actualizarPropiedades, mostrarModalModulos, cerrarModalModulos, llenarModuloSeleccionado }}>
            {children}
        </ModulosContexto.Provider>
    )

}