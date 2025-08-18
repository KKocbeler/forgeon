import styles from "./Faq.module.scss";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const faqItems = [
  {
    question: "Siparişimi ne zaman teslim alabilirim?",
    answer: "Siparişiniz 1-3 iş günü içerisinde kargoya verilir. Teslimat süresi genellikle 2-5 iş günü sürmektedir."
  },
  {
    question: "Kargo ücreti ne kadar?",
    answer: "1500 TL ve üzeri siparişlerde kargo ücretsizdir. Daha düşük tutarlarda sabit kargo ücreti 49.90 TL’dir."
  },
  {
    question: "Ürünümü nasıl iade edebilirim?",
    answer: "Ürünü teslim aldığınız tarihten itibaren 14 gün içinde iade talebi oluşturabilirsiniz. İade için ürün kullanılmamış ve orijinal ambalajında olmalıdır."
  },
  {
    question: "İade ettiğim ürünün ücretini ne zaman alırım?",
    answer: "İade ettiğiniz ürün depomuza ulaştıktan sonra 3-7 iş günü içinde ücret iadesi gerçekleştirilir."
  },
  {
    question: "Ürün stokta yoksa ne yapmalıyım?",
    answer: "Stokta olmayan ürünler için 'Stok gelince haber ver' seçeneğini kullanarak bildirim alabilirsiniz."
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı ve kapıda ödeme seçeneklerini kabul ediyoruz."
  },
  {
    question: "Kapıda ödeme var mı?",
    answer: "Evet, kapıda nakit veya kredi kartı ile ödeme yapabilirsiniz."
  },
  {
    question: "B2B kayıt nasıl yapılır?",
    answer: "B2B kayıt sayfasından şirket bilgilerinizi doldurarak başvurunuzu iletebilirsiniz. Onay süreci 1-2 iş günü sürmektedir."
  },
  {
    question: "Hesabımı nasıl silebilirim?",
    answer: "Hesabınızı silmek için iletişim sayfası üzerinden bize talep gönderebilirsiniz."
  },
  {
    question: "Ürünüm hasarlı geldi, ne yapmalıyım?",
    answer: "Lütfen ürünle birlikte gelen kargo tutanağını saklayarak bizimle 48 saat içinde iletişime geçin. Size en kısa sürede yardımcı olacağız."
  }
];
const Faq = () => {
    const [questionIndex, setQuestionIndex] = useState<number[]>([])
    
    const handleOpenQuestion = (index:number) => {
        setQuestionIndex(prev => {
            if(prev?.includes(index)) {
                return prev.filter(item => item !== index)
            } else {
                return [...prev, index]
            }
        })
    }

    console.log(questionIndex)
  return (
    <div className={`${styles.faq} container`}>
        <header>
            <h1>Sıkça Sorulan Sorular</h1>
        </header>
        <main>
            <div className={styles["faq-container"]}>
                <ul className={styles["faq-list"]}>
                    {
                        faqItems.map((item, index) => (
                            <li className={styles["faq-list-item"]} key={index}>
                                <div className={styles.question} onClick={() => handleOpenQuestion(index)}>
                                    <div className={`${styles.direction} ${questionIndex.includes(index) ? styles.show : ""}`}>
                                        <MdOutlineArrowForwardIos  />
                                    </div>
                                    <p>{item.question}</p>
                                </div>
                                <div className={`${styles.answer} ${questionIndex.includes(index) ? styles.show : ""}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    </div>
  )
}

export default Faq