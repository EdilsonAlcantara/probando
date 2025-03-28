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

    const cargarDatos = () => {
        actualizarPropiedades('listado', datos);
    };

    useEffect(() => {
        cargarDatos();
    }, [datos]);

    return (
        <ModulosContexto.Provider value={{ state, dispatch }}>
            {children}
        </ModulosContexto.Provider>
    )

}