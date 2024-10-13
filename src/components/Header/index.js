import styles from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png"


function Header() {
    return (
        <>
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="Logo principal"/></Link>
            <nav>
            <Link to="/">HOME</Link>
              <Link to="/favoritos">FAVORITOS</Link>
            </nav>
        </header>
        </>
    );
}

export default Header;
