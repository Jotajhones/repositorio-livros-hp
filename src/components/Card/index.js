import styles from "./card.module.css";
import unHeart from "./icons/heart.png";
import heart from "./icons/heart1.png";
import chat from "./icons/comment.png";
import { useFavoriteContext } from "../../context/favorites";
import { Link } from "react-router-dom";
import Star from "../Star";

export function Card({ id, title, imagem }) {

    const { favorite, addFavorite } = useFavoriteContext();
    // validação para trocar os icones caso o item esteja em favoritos
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? heart : unHeart

    return (
        <>

            <div id={id} className={styles.card}>
                <Link to={`/description/${id}`}>
                    <img src={imagem} alt={`Capa: ${title}`} />
                </Link>
                <abbr title={title}>
                    <h2>{title}</h2>
                </abbr>
                <Star starCount={5}/>
                <div className={styles.divIcons}>
                    <div onClick={() => addFavorite({ id, title })}
                    >
                        <img src={icone} />

                    </div>
                    <div>
                        <Link to={`/description/${id}`}>
                            <img src={chat} />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export function filterCapa(capa, livro) {
    const result = capa.filter(item => {
        if (item.id === livro.number || item.id === livro.id) {
            return (item.capa)
        }
    })
    return result[0].capa
}


// https://potterapi-fedeperin.vercel.app/pt/books

