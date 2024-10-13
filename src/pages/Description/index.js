import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardBigger from "../../components/CardBigger";
import styles from "./description.module.css";
import { useBookData } from "../../hooks/useBooksData";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import capa from "../../json/capas.json";
import { filterCapa } from "../../components/Card";
import Comment from "../../components/Comment";



function Description() {

    window.scrollTo(0, 0)
    const { data } = useBookData();
    const params = useParams();
    const livro = data?.find((item) => { return item.number === params.id })
    if (!livro) { return <PageNotFound /> }

    return (
        <>
            <Header />
            <section className={styles.description}>
                <CardBigger id={livro.number} capa={filterCapa(capa, livro)} title={livro.title} description={livro.description} />
            </section>
            <Comment />
            <Footer />
        </>
    );
}


export default Description;