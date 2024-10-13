import styles from "./cardBigger.module.css";
import heart from "../Card/icons/heart.png";
import unHeart from "../Card/icons/heart1.png";
import Star from "../Star";
import { useFavoriteContext } from "../../context/favorites";
import InputComment from "../InputComment";
// import InputComment from "../InputComment";

function CardBigger({ id, capa, title, description }) {
    const { favorite, addFavorite } = useFavoriteContext();
    // validação para trocar os icones caso o item esteja em favoritos
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? unHeart : heart;

    return (
        <>
            <section className={styles.cardBigger}>
                <div className={styles.capa}>
                    <div>
                        <img src={capa} />
                    </div>
                    <div className={styles.interface}>

                        <div onClick={() => addFavorite({ id, title })} >
                            <img src={icone} alt="Icone Coração" />
                        </div>

                        <div>
                            <Star starCount={5} />
                        </div>

                    </div>
                </div>
                <div className={styles.conteudo}>
                    <div className={styles.textos}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div>
                        <InputComment />
                    </div>
                </div>
            </section>
        </>
    );
}
export default CardBigger;