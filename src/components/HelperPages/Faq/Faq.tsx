import styles from "./Faq.module.scss";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const faqItems = [
  {
    question: "Ürünleriniz tamamen el yapımı mı yoksa makineler de kullanılıyor mu?",
    answer: "Ahşap oyma ürünlerimiz CNC makinesinde işlenmektedir. Sonrasında yapılan detay temizliği ve koruma yağları, vernikleri el işçiliği ile yapılmaktadır."
  },
  {
    question: "Ahşap ürünler sağlığa zararlı boya veya kimyasal içeriyor mu?",
    answer: "Hayır, ürünlerimizde sağlığa zararlı boya veya kimyasal kullanılmaz. Doğal ahşap yağları ve vernikler tercih edilir."
  },
  {
    question: "Ürünlerde kişisel yazı, logo veya tarih ekletebilir miyim?",
    answer: "Evet, dilediğiniz yazı, logo veya tarih ürünlere işlenebilir. Bunun için sipariş öncesinde bizimle iletişime geçmeniz yeterlidir."
  },
  {
    question: "Özel tasarım siparişleri için nasıl iletişim kurabilirim?",
    answer: "Web sitemiz üzerinden iletişim formu veya WhatsApp hattımız aracılığıyla bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Özel siparişlerde üretim süresi ne kadar sürer?",
    answer: "Üretim süresi tasarıma ve boyuta göre değişmektedir. Ortalama 7–15 iş günü içinde teslim edilir."
  },
  {
    question: "Aynı üründen toplu sipariş verebilir miyim (hediyelik/organizasyon için)?",
    answer: "Evet, toplu siparişlerde özel fiyatlandırma yapılır. Organizasyonlar, hediyelikler ve kurumsal etkinlikler için toplu üretim yapabiliyoruz."
  },
  {
    question: "Siparişimden sonra değişiklik yapabilir miyim?",
    answer: "Stok ürünlerde kargo öncesine kadar değişiklik yapılabilir. Özel siparişlerde ise üretim başladıktan sonra değişiklik mümkün olmayabilir."
  },
  {
    question: "Ürün fotoğraflarıyla gerçekte gelen ürün arasında fark olur mu?",
    answer: "Tüm fotoğraflar gerçek ürünlere aittir. Ancak ahşap doğal bir malzeme olduğu için damar yapısı ve ton farkları görülebilir."
  },
  {
    question: "Kargo ücreti ne kadar?",
    answer: "Türkiye içi siparişlerde belirli tutarın üzerindeki alışverişlerde kargo ücretsizdir. Altındaki siparişlerde sabit kargo ücreti uygulanır."
  },
  {
    question: "Siparişim kargoya verilince nasıl takip edebilirim?",
    answer: "Siparişiniz kargoya verildiğinde size takip numarası SMS/e-posta yoluyla iletilir."
  },
  {
    question: "Ürünler kargoda zarar görürse ne yapmalıyım?",
    answer: "Ürün zarar görürse tutanak tutarak kargoyu teslim almayın ve bizimle iletişime geçin. Hemen değişim sağlanır."
  },
  {
    question: "Paketleme ürünün zarar görmesini engelleyecek şekilde mi yapılıyor?",
    answer: "Evet, tüm ürünler darbelere karşı özel koruma malzemeleriyle paketlenmektedir."
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Sitemiz üzerinden yaptığınız kredi kartı ile ödeme işlemlerini kabul ediyoruz."
  },
  {
    question: "İade ettiğim ürün için geri ödeme süreci ne kadar sürüyor?",
    answer: "Ürün bize ulaştıktan sonra 7–10 iş günü içinde ödemeniz iade edilir."
  },
  {
    question: "Kişiye özel tasarımlar neden iade edilemiyor?",
    answer: "Kişiye özel üretilen ürünler yalnızca size özel hazırlandığı için tekrar satışa sunulamaz. Bu nedenle iade kapsamı dışındadır."
  },
  {
    question: "Ürün hasarlı geldiğinde iade mi değişim mi yapılıyor?",
    answer: "Ürün elinize ulaştığında kutuda bir hasar var ise kutuyu açmadan önce fotoğraflayıp internet sitesi üzerindeki iletişim numarasından bize ulaşmanız gerekmektedir. Daha sonrasında hasarlı ürünle ilgili iade veya değişim işlemi yapılmaktadır."
  },
  {
    question: "Ahşap ürünler güneş ışığında rengini kaybeder mi?",
    answer: "Direkt güneş ışığına uzun süre maruz kalırsa renk tonunda değişiklik olabilir. İç mekânda kullanılması önerilir."
  },
  {
    question: "Ürünlerin ömrünü uzatmak için hangi yağ veya bakım ürünlerini öneriyorsunuz?",
    answer: "Doğal ahşap yağları (örneğin keten yağı, ceviz yağı veya mineral yağ) kullanılabilir."
  },
  {
    question: "Ahşap ürünler dış mekânda kullanılabilir mi?",
    answer: "Ahşap ürünlerimiz iç mekân kullanımı için uygundur. Dış mekânda kullanmak için ekstra koruyucu işlem uygulanmalıdır."
  },
  {
    question: "Ürünlerin üzerine sıcak tabak veya bardak koymak sorun yaratır mı?",
    answer: "Direkt sıcak temas ahşap yüzeyde iz bırakabilir. Altlık kullanılması tavsiye edilir."
  },
  {
    question: "Uzun süre kullanılmadığında nasıl saklamalıyım?",
    answer: "Nemden uzak, kuru ve güneş almayan bir yerde saklamanız en uygun yöntemdir."
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
        <h1>Sıkça Sorulan Sorular</h1>
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
    </div>
  )
}

export default Faq