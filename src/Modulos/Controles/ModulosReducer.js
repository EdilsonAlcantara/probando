import { EstadoInicialModulos } from "../Modelos/EstadoInicialModulos";

export const modulosReducer = (state = EstadoInicialModulos, action) => {

    if (action.type === 'setPropiedad') {
        return { ...state, [action.payload.id]: action.payload.value };
    }

    return state;
}
