import styles from "./comment.module.css";

function InputComment({ comentar, setInputValue }) {
    
    return (
        <>
            <form onSubmit={comentar} >
                <div className={styles.comment}>
                    <input
                        type="text-area"
                        placeholder="Digite Aqui"
                        className={styles.text}
                        onChange={event => setInputValue(event.target.value)}
                    />
                    <button
                        value="Enviar"
                        className={styles.button}
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
}

export default InputComment;
