import styles from "./main.module.css";

function Main({ children }) {
    return (
        <>
            <div className={styles.bordaMain}></div>
            <main className={styles.main}>

                {children}
            </main>
        </>
    );
}

export default Main;