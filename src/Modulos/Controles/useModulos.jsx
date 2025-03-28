import { useContext } from "react";
import { ModulosContexto } from "./modulosContexto";

export const useModulos = () => {

    const contexto = useContext(ModulosContexto);

    if (!contexto) {
        throw new Error("No se puede utilizar el contexto debe esta dentro del proveedor Modulos");
    }

    return contexto;

}