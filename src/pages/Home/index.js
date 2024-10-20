import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Card, filterCapa } from "../../components/Card";
import styles from "./home.module.css";
import { useBookData } from "../../hooks/useBooksData";
import capa from "../../json/capas.json";
import Search from "../../components/Search";
import { useState } from "react";

function Home() {
    const { data } = useBookData();
    const [search, setSearch] = useState();
    const [useSearch, setUseSearch] = useState();
    const [result, setResult] = useState();

    // contador que valida se ja existe a const result
    const count = result ? result.length : false

    function procurar(e) {

        e.preventDefault();
        //Setuse atualiza o resultado de useSearch e passsa o valor de Search no momento do click 
        setUseSearch(search);
        //SetResult pega o valor de search no momento do click  verifica se resultado compativel
        setResult(data?.filter((livro) => livro.title.toUpperCase().includes(search.toUpperCase())))
    }

    return (
        <>
            <Header />
            <Banner />
            <Main >
                <Search setSearch={setSearch} procurar={procurar} setResult={setResult} />

                {/* Rederização condicional, se result for criado e for maior que 0 ele retorna "RESULTADOS" senão Retorna COletanea */}
                {
                    count > 0 ? (
                        <>
                            <h1>Resultados</h1>
                            <section className={styles.section}>
                                {result.map((livro) => <Card id={livro.number} key={livro.number} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                            </section>
                        </>
                    ) : (
                        <>
                            <h1>Coletanea</h1>
                            <section className={styles.section}>
                                {data?.map(livro => <Card id={livro.number} key={livro.number} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                            </section>
                        </>
                    )
                }
            </Main>
            <Footer />
        </>
    );
}



/* 

                {
                    useSearch ? (
                        <>
                        <h1>Resultados</h1>
                        {result.map((livro) => <Card id={livro.number} key={livro.number} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                        </>
                    ) : (
                        <>
                        <h1>Coletanea</h1>
                        <section className={styles.section}>
                            {data?.map(livro => <Card id={livro.number} key={livro.number} imagem={filterCapa(capa, livro)} title={livro.title} />)}
                        </section>
                    </>
                    )
                }
*/
export default Home;
