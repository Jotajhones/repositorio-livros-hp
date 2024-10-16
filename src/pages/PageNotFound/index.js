import styles from "./pageNotFound.module.css";
import logo from "./images/404-error.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageNotFound() {
    return (
        <>
            <Header />
            <section className={styles.section}>
                <h1>Pagina não encontrada</h1>
                <img src={logo} alt="Imagem ilustrativa, erro de conexao erro 404"/>
            </section>
            <Footer />
        </>

    );
}

export default PageNotFound;
