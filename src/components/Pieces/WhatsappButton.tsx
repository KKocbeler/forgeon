import { FaWhatsapp } from "react-icons/fa"
import styles from "./WhatsappButton.module.scss"

const WhatsappButton = () => {
  return (
    <div className={styles.watsapp}>
        <a
            href="https://wa.me/905555555555" // numaranı buraya yaz
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaWhatsapp />
        </a>
    </div>
  )
}

export default WhatsappButton