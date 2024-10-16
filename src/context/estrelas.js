import { createContext, useContext, useState } from "react";

export const EstrelasContext = createContext();
EstrelasContext.displayName = "Estrelas";

export default function EstrelasProvider({ children }) {
    const [estrelasContext, setEstrelas] = useState([]);

    return (
        <EstrelasContext.Provider
            value={{ estrelasContext, setEstrelas }}
        >
            {children}
        </EstrelasContext.Provider>
    );
}
// não esquecer de adicionar a const inicial acima como tag em routes.js envolvendo toda as rotas.

// hook personalizado;

export function useEstrelasContextContext() {
    const { estrelasContext, setEstrelas } = useContext(EstrelasContext);

    function addestrelasContext(newestrelasContext) {

        // verificr se existeem repetições
        const repeatestrelasContext = estrelasContext.some((item) => item.id === newestrelasContext.id);

        // nova lista recebe lista anterior
        let newList = [...estrelasContext];

        // verificar se não tem item repetido e adicionar a lista de favoritos;
        if(!repeatestrelasContext) {
            newList.push(newestrelasContext)
            return setEstrelas(newList)
        }

        // se for repetido ele será tirado da lista
        newList = estrelasContext.filter((fav) => fav.id !== newestrelasContext.id);

        return setEstrelas(newList);
    }

    return {
        estrelasContext,
        addestrelasContext
    }
}