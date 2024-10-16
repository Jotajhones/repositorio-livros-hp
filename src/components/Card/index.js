import styles from "./card.module.css";
import unHeart from "./icons/heart.png";
import heart from "./icons/heart1.png";
import chat from "./icons/comment.png";
import { useFavoriteContext } from "../../context/favorites";
import { useEstrelasContextContext } from "../../context/estrelas"
import { Link } from "react-router-dom";
import Star from "../Star";
import { useState } from "react"

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
                <Star starCount={5} id={id} />
                <div className={styles.divIcons}>
                    <div onClick={() => addFavorite({ id, title })}
                    >
                        <img src={icone} alt="Icone Coração, favoritos" />

                    </div>
                    <div>
                        <Link to={`/description/${id}`}>
                            <img src={chat} alt="Icone caixa de comentarios" />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export function filterCapa(capa, livro) {
    let result
    capa.forEach((item, i) => {
        if (item.id === livro.number || item.id === livro.id) {

            result = item.capa
            return result
        }
    });
    return result
}
