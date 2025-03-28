import { EstadoInicialModulos } from "../Modelos/EstadoInicialModulos";

export const modulosReducer = (state = EstadoInicialModulos, action) => {

    console.log('modulosReducer', state);

    if (action.type === 'setPropiedad') {
        return { ...state, [action.payload.id]: action.payload.value };
    }

    return state;
}
