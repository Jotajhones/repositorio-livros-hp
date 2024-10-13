import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Card, filterCapa } from "../../components/Card";
import styles from "./home.module.css";
import { useBookData } from "../../hooks/useBooksData";
import capa from "../../json/capas.json";

function Home() {
    const { data } = useBookData();

    return (
        <>
            <Header />
            <Banner />
            <Main>
            <h1>Coletanea</h1>
                <section className={styles.section}>
                    {data?.map(livro => <Card id={livro.number} key={livro.number} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                </section>
            </Main>
            <Footer />
        </>
    );
}

export default Home;
