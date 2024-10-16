import styles from "./comment.module.css";

function Comment({children}) {
    return (
        <>
            <section className={styles.comment} >
                <p>{children}</p>
            </section>
        </>
    );
}

export default Comment;
