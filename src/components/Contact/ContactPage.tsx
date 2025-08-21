import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import styles from "./ContactPage.module.scss";

const contactInfo = [
  {
    title: "Adres",
    icon: <FaMapMarkerAlt />,
    content: "Uşak, Ulubey Mahallesi, Atatürk Caddesi No:12"
  },
  {
    title: "Telefon",
    icon: <FaPhoneAlt />,
    content: "+90 555 555 55 55"
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    content: "info@example.com"
  }
];

const ContactPage = () => {
  return (
    <div className={styles["contact-page"]}>
        <div className={styles["form-section"]}>
            <div className={styles["contact-left"]}>
                <h1>Bizimle İletişime Geç</h1>
                <p className={styles.desc}>
                    Sorularınız, önerileriniz veya iş birlikleri için formu doldurarak bize ulaşabilirsiniz. 
                    Size en kısa sürede geri dönüş yapacağız.
                </p>
                <form action="">
                    <div className={styles["input-box"]}>
                        <input type="text" id="name" required/>
                        <label htmlFor="name">Adınız</label>
                    </div>
                    <div className={styles["input-box"]}>
                        <input type="text" id="email" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles["textarea-box"]}>
                        <textarea id="message" required/>
                        <label htmlFor="message">Mesajınız</label>
                    </div>
                    <button type="submit" aria-label="Gönder">Gönder</button>
                </form>
            </div>
            <div className={styles["contact-right"]}>
                <img src="/contact/contact-img.webp" alt="Uşak'taki ofisimizin iletişim görseli" loading="lazy" />
            </div>
        </div>
        <div className={styles["contact-info"]}>
            {
                contactInfo.map(info => (
                    <div className={styles["contact-info__item"]} key={info.title}>
                        <div className={styles.icon}>{info.icon}</div>
                        <div className={styles.body}>
                            <h3>{info.title}</h3>
                            <p>{info.content}</p>
                        </div>
                    </div>
                )) 
            }
        </div>
        <div className={styles.map}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24920.291085844245!2d29.40689851436004!3d38.6710318345507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1755686090214!5m2!1str!2str"
                loading="lazy"
            >
            </iframe>
        </div>
    </div>
  )
}

export default ContactPage