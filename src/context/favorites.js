import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
// não esquecer de adicionar a const inicial acima como tag em routes.js envolvendo toda as rotas.

// hook personalizado;

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {

        // verificr se existeem repetições
        const repeatFavorite = favorite.some((item) => item.id === newFavorite.id);

        // nova lista recebe lista anterior
        let newList = [...favorite];

        // verificar se não tem item repetido e adicionar a lista de favoritos;
        if(!repeatFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repetido ele será tirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id);

        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorite
    }
}
