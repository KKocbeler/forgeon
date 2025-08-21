import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
        <h1>404</h1>
        <p>
            Üzgünüz, aradığınız sayfa mevcut değil ya da taşınmış olabilir.
            Lütfen adresi kontrol edin veya ana sayfaya geri dönün.
        </p>
        <Link to="/" aria-label="Anasayfa">Ana Sayfaya Dön</Link>
    </div>
  )
}

export default NotFound