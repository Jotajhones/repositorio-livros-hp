import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import styles from "./favorites.module.css";
import { Card, filterCapa } from "../../components/Card";
import { useFavoriteContext } from "../../context/favorites";
import capa from "../../json/capas.json";

function Favoritos() {
    const { favorite } = useFavoriteContext()
    return (
        <>
            <Header />
            <Banner />
            <Main >
            <h1>Favoritos</h1>
                <section className={styles.section}>
                    {favorite.map(livro => <Card id={livro.id} key={livro.id} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default Favoritos;