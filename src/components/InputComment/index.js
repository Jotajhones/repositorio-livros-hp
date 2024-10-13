import { useState } from "react";
import styles from "./comment.module.css";

function InputComment() {

    const [inputValue, setInputValue] = useState("");

    const abobora = () => {

              
                const k = document.getElementById('caixa')
                k.innerHTML += `<div class="comentarios"> 
                                    <p>${inputValue}</p>
                                </div>`


    }

    return (
        <>
            <div className={styles.comment}>
                <input
                    type="text-area"
                    placeholder="Digite Aqui"
                    className={styles.text}
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <button
                    value="Enviar"
                    className={styles.button}
                    onClick={abobora}
                >
                    Enviar
                </button>
            </div>
        </>
    );
}

export default InputComment;
