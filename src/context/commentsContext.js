import { createContext, useContext, useState } from "react";

export const CommentsContext = createContext();
CommentsContext.displayName = "Comentarios";

export default function CommentsProvider({ children }) {
    const [comentariosContexto, setComentarios] = useState([]);

    return (
        <CommentsContext.Provider
            value={{ comentariosContexto, setComentarios }}
        >
            {children}
        </CommentsContext.Provider>
    );
}


export function useCommentsContext() {

    const { comentariosContexto, setComentarios } = useContext(CommentsContext);

    function addComentarios(newComentario) {

        // const repeatComentario = comentariosContexto.filter((comentario) => comentario.id !== newComentario.id) 


        let newList = [...comentariosContexto]

        // if (!repeatComentario) {
            newList.push(newComentario)
            // return setComentarios(newList)
        // }

        // se for repetido ele será tirado da lista
        // newList = comentariosContexto.filter((comentario) => comentario.id !== newComentario.id);

        return setComentarios(newList);
    }

    return {
        comentariosContexto,
        addComentarios
    }
}