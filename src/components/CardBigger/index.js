import styles from "./cardBigger.module.css";
import heart from "../Card/icons/heart.png";
import unHeart from "../Card/icons/heart1.png";
import Star from "../Star";
import { useFavoriteContext } from "../../context/favorites";
import { useCommentsContext } from "../../context/commentsContext"
import InputComment from "../InputComment";
import { useState } from "react";
import Comment from "../Comment"

function CardBigger({ id, capa, title, description, inputValue }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const { comentariosContexto, addComentarios } = useCommentsContext();
    const isComents = comentariosContexto.some((com) => com.id === id)

    // validação para trocar os icones caso o item esteja em favoritos
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icone = isFavorite ? unHeart : heart;

    const [input, setInput] = useState('');
    const [userInput, setUserInput] = useState('');
    const [comentarios, setComentarios] = useState([]);

    let count = 0

    function comentar(e) {

        e.preventDefault()
        // Gatilho do State apenas quando o botão for clicado, antes de ser clicado o valor padrão de input sempre será undefined
        setUserInput(input)
        //  Tratando a array comentarios para receber novos itens
        const newItem = input;
        const newComentarios = [...comentarios, newItem];
        setComentarios(newComentarios);
        // linha inutil
        if (typeof (newItem) === Boolean) {
            return (userInput)
        }

        addComentarios({ id, title, input })

    }


    return (
        <>
            <section className={styles.cardBigger}>
                <div className={styles.capa}>
                    <div>
                        <img src={capa} alt="Imagem da capa do livro de refencia" />
                    </div>
                    <div className={styles.interface}>

                        <div onClick={() => addFavorite({ id, title })} >
                            <img src={icone} alt="Icone Coração" />
                        </div>

                        <div>
                            <Star starCount={5} id={id} />
                        </div>

                    </div>
                </div>
                <div className={styles.conteudo}>
                    <div className={styles.textos}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div>
                        <InputComment comentar={comentar} inputValue={input} setInputValue={setInput} />

                    </div>
                </div>
            </section>
            {isComents && (

                comentariosContexto.map(item => { if (Number(item.id) === Number(id)) return <Comment children={item.input} key={`comments${id}.${item.input}`} /> })
            )
            }
        </>
    );
}
export default CardBigger;