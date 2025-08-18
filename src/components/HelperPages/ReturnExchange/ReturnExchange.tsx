import styles from './ReturnExchange.module.scss';

const ReturnExchange = () => {
  return (
    <div className={`${styles["return-exchange"]} container`}>
        <header>
            <h1>İade ve Değişim</h1>
        </header>
        <main>
            <article>
                <p>Sayın <b>Forgeon</b> Müşterisi</p>
                <p>
                    Firmamız, müşteri memnuniyetini en üst düzeye çıkarmak adına,
                    yasal süreçlerin ötesinde kolay iade seçenekleri sunmaktan memnuniyet duyar.
                    Müşteri odaklı yaklaşımımızın bir parçası olarak, aşağıda yer alan iade politikamızı lütfen dikkatlice inceleyiniz.
                </p>
            </article>
            <article>
                <h2>İletişim Kanallarımız</h2>
                <p>
                    Deneyimli ve uzman ekibimiz, her zaman sizinle iletişim kurmaya hazır.
                    Herhangi bir soru, şikayet veya ihtiyaç durumunda <a href="mailto:example@email.com">example@email.com</a> veya <a href="https://wa.me/905551112233" target="_blank" rel="noopener noreferrer"> +90 578 265 12 55</a> Whatsapp adresinden bize ulaşabilirsiniz.
                </p>
            </article>
            <article>
                <h2>İade Süreci</h2>
                <p>
                    Eğer satın almış olduğunuz ürünlerden herhangi bir sebepten dolayı memnun kalmazsanız, 
                    siparişinizi teslim aldıktan sonraki 14 gün içerisinde iade edebilirsiniz. 
                    Lütfen iade edeceğiniz ürünü, orijinal ambalajı içinde, eksiksiz ve satılabilir durumda paketleyiniz. 
                    Ayrıca, size ulaşan faturadaki iade bölümünü eksiksiz doldurarak ürünü bizimle birlikte gönderiniz.
                </p>
            </article>
            <article>
                <h2>Dikkat Edilmesi Gerekenler</h2>
                <p>İade edilen ürünleri kargoya verirken, dikkatli bir şekilde paketleme yaparak hasar görmemesine özen gösteriniz.</p>
                <p>Kargo takip numaranızı bizimle paylaşmanız, sürecin takibini sağlamamız adına önemlidir.</p>
            </article>
            <article>
                <h2>Hasar ve Kayıp Sorumluluğu</h2>
                <p>Hangroar, iade süreci sırasında meydana gelen hasar veya kayıplardan sorumlu tutulamaz.</p>
            </article>
            <article>
                <h2>İade Onay ve Geri Ödeme</h2>
                <p>İade edilen ürünler tarafımızca incelendikten sonra, geri ödemeyi 1-3 iş günü içerisinde işleme koyacağımızı belirtmek isteriz.</p>
            </article>
            <article>
                <h2>Politika Uyum Kriterleri</h2>
                <p>Lütfen iade sürecinizin, yukarıda belirtilen kriterlere uygun olması gerektiğini unutmayınız. Bu kriterlere uymayan iadeler, politika kapsamında değerlendirilmeyecektir.</p>
                <p>Forgeon olarak sizlere en iyi hizmeti sunma konusundaki kararlılığımızı sürdürmekteyiz. İyi alışverişler dileriz."</p>
            </article>
            <article>
                <h2>Adres Bilgimiz</h2>
                <p>Bozburun Mah. 7013 sk. No:14/A 20020, Tarhana / UŞAK</p>
            </article>
        </main>
    </div>
  )
}

export default ReturnExchange