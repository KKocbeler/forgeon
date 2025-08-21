import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';

const footerLinks = [
  {
    title: "Kategoriler",
    items: [
      { name: "Anasayfa", path: "/blog" },
      { name: "Ürünlerimiz", path: "/products" },
      { name: "Fikirler", path: "/ideas" },
      { name: "Geliştiriciler", path: "/developers" }
    ]
  },
  {
    title: "Hesabım",
    items: [
      { name: "Giriş Yap", path: "/account/login" },
      { name: "Kayıt Ol", path: "/account/register" },
      { name: "Siparişim Nerede?", path: "/where-is-my-shipping" }
    ]
  },
  {
    title: "Faydalı Bağlantılar",
    items: [
      { name: "Hakkımızda", path: "/about" },
      { name: "Kullanım ve Gizlilik", path: "/terms-and-privacy" },
      { name: "İade ve Değişim", path: "/returns-and-exchanges" },
      { name: "İletişim", path: "/contact" },
      { name: "S.S.S", path: "/faq" }
    ]
  }
];

const socialLinks = [
  {
    icon: <IoLogoInstagram />,
    path: "https://www.instagram.com/",
    label: "Instagram"
  },
  {
    icon: <GrFacebookOption />,
    path: "https://www.facebook.com/",
    label: "Facebook"
  },
  {
    icon: <RiTwitterXLine />,
    path: "https://twitter.com/",
    label: "Twitter"
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/",
    label: "Tiktok"
  },
];


const Footer = () => {
  return (
    <footer className={style.footer}>

        <div className={`${style["footer-body"]} container`}>
            <div className={style.logo}>
                <img src="/logo/forg.png" alt="Company Logo" />
            </div>
            <div className={style["social-media"]}>
                <div className={style["footer-list-title"]}>Bizi sosyal medyada takip edin</div>
                <ul>
                    {
                        socialLinks.map((social, s) => (
                            <li key={s}>
                                <a href={social.path} key={s} rel='noopener noreferrer' target='_blank' aria-label={social.label}>{social.icon}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={style["footer-menu"]}>
                {
                    footerLinks.map((links, index) => (
                        <div className={style["footer-lists"]} key={index}>
                            <div className={style["footer-list-title"]}>{links.title}</div>
                            <ul>
                                {
                                    links.items.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.path}>{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer