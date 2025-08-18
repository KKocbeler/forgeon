import { Link } from "react-router-dom";
import styles from "./DesktopNavMenu.module.scss";
import type { scrollProps } from "../Navbar";

const navMenu = [
    { title: "Anasayfa", path: "/" },
    { title: "Ürünlerimiz", path: "/products" },
    { title: "Tablolar", path: "/tablo" },
    { title: "Figürler", path: "/oda-kokusu" }
];

const DesktopNavMenu = ({handleScroll}: scrollProps) => {
    return (
        <div className={`${styles["nav-menu"]} ${handleScroll && styles.scrolled}`}>
            <div className={styles["nav-menu-list"]}>
                <ul className={styles["first-list"]}>
                    {
                        navMenu.slice(0, 2).map((item, i) => (
                            <li key={i}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>  
                        ))
                    }
                </ul>
                <div className={styles["middle-logo"]}>
                    <Link to={'/'}>
                        <img src="/logo/forg.png" alt="" />
                    </Link>
                </div>
                <ul className={styles["second-list"]}>
                    {
                        navMenu.slice(2, 4).map((item, j) => (
                            <li key={j}>
                                <Link to={'/'}>
                                    {item.title}
                                </Link>
                            </li>  
                        ))
                    }    
                </ul>                                              
            </div>
        </div>
    )
}

export default DesktopNavMenu