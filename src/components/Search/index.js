import styles from "./search.module.css";

function Search({ setSearch, procurar }) {

    return (
        <form className={styles.search} onSubmit={procurar}>
            <div>
                <input
                    type="search"
                    placeholder="Buscar..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Buscar</button>
            </div>
        </form>
    );
}

export default Search;