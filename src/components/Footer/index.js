import styles from "./footer.module.css";
import logo from "./images/logo.png";

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <img src={logo} alt="Logo Ilustrativa"/>
                React Studies &copy;
            </footer>
        </>
    );
}

export default Footer;