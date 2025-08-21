import styles from "./TermsPrivacy.module.scss";

const TermsPrivacy = () => {
  return (
    <div className={styles["terms-privacy"]}>
      <h1>Gizlilik ve Kullanım Şartları</h1>
      <section>
        <p>
        Kişisel bilgileriniz üçüncü kişilerle kesinlikle paylaşılmaz, yalnızca
        yasal zorunluluk halinde resmi mercilerle paylaşılabilir.
        </p>

        <p>
        Ödeme işlemleriniz, güvenli altyapı üzerinden gerçekleşmekte olup kredi
        kartı bilgileriniz sistemimizde kesinlikle saklanmaz.
        </p>

        <p>
        Siteye girişlerinizde cihazınız üzerinden otomatik olarak bazı teknik
        veriler (IP adresi, tarayıcı bilgisi vb.) kayıt altına alınabilir. Bu
        veriler sadece site güvenliği ve istatistik amaçlı kullanılmaktadır.
        </p>
      </section>
      <section>
        <h2>İletişim ve Ticari Elektronik Mesajlar</h2>
        <p>
          E-posta veya SMS bilgilendirmeleri için verdiğiniz onay kapsamında
          kampanya, indirim ve bilgilendirme mesajları alabilirsiniz.
        </p>
        <p>
          Dilediğiniz zaman bu mesajları almayı bırakmak için bize
          ulaşabilirsiniz.
        </p>
      </section>
      <section>
        <h2>Çerez (Cookie) Kullanımı</h2>
        <p>
          Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler
          kullanılmaktadır.
        </p>
        <p>
          Çerezler, tarayıcınız üzerinden silinebilir veya engellenebilir. Ancak
          bu durumda sitemizin bazı özellikleri sınırlı çalışabilir.
        </p>
      </section>
      <section>
        <h2>Yasal Haklarınız</h2>
        <p>
          KVKK (6698 sayılı Kişisel Verilerin Korunması Kanunu) kapsamında
          kişisel verileriniz üzerinde erişim, düzeltme veya silme talebinde
          bulunma hakkına sahipsiniz.
        </p>
        <p>
          Bu talepleriniz için bizimle{" "}
          <a href="mailto:iletisim@ornekmail.com">iletisim@ornekmail.com</a>{" "}
          üzerinden iletişime geçebilirsiniz.
        </p>
      </section>
    </div>
  );
};

export default TermsPrivacy;
