import { EstadoInicialModulos } from "../Modelos/EstadoInicialModulos";

export const modulosReducer = (state = EstadoInicialModulos, action) => {

    console.log('modulosReducer', action);

    if (action.type === 'setPropiedad') {
        return { ...state, [action.payload.id]: action.payload.value };
    }

    if (action.type === 'llenarModuloSeleccionado') {
        return { ...state, moduloSeleccionado: { ...action.payload.moduloSeleccionado } };
    }

    return state;
}
