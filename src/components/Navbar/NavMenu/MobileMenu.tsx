import { IoCloseOutline, IoLogoInstagram } from 'react-icons/io5';
import styles from './MobileMenu.module.scss';
import { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTiktok, FaUser } from 'react-icons/fa';
import { capitalize } from '../../../utils/Capitalized';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/app/store';
import { GoHome } from 'react-icons/go';
import { LuUser } from 'react-icons/lu';
import { PiAddressBookLight } from 'react-icons/pi';
import { CiBoxes, CiHeart, CiSettings, CiShoppingCart } from 'react-icons/ci';

interface PropsTypes {
    isMobilNavOpen: boolean;
    setIsMobilNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navMenu = [
    { title: "Anasayfa", path: "/" },
    { title: "Ürünlerimiz", path: "/products" },
    { title: "Tablolar", path: "/tablo" },
    { title: "Figürler", path: "/oda-kokusu" }
];

const accountList = [
        {
            icon: <GoHome />,
            title: "Anasayfa",
            path: "/"
        },
        {
            icon: <CiBoxes />,
            title: "Ürünlerimiz",
            path: "/products"
        },
        {
            icon: <LuUser />,
            title: "Profilim",
            path: "/profile"
        },
        {
          icon: <PiAddressBookLight />,
          title: "Adreslerim",
          path: "/profile/addresses"
        },
        {
          icon: <CiShoppingCart />,
          title: "Siparişlerim",
          path: "/profile/orders"
        },
        {
          icon: <CiHeart />,
          title: "Favorilerim",
          path: "/profile/favorites"
        },
        {
          icon: <CiSettings />,
          title: "Ayarlar",
          path: "/profile/settings"
        },
];


const navSocial = [
  {
    path: "https://www.instagram.com/",
    icon: <IoLogoInstagram />,
    label: "Instagram",
  },
  {
    path: "https://www.facebook.com/",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    path: "https://www.tiktok.com/",
    icon: <FaTiktok />,
    label: "Tiktok",
  },
];

const MobileMenu = ({isMobilNavOpen, setIsMobilNavOpen}: PropsTypes) => {
    const user = useSelector((state: RootState) => state.user.user);
    const isLoggedIn = true
    const mobileNavRef = useRef<HTMLDivElement>(null);
    useEffect(() =>{
        const handleOverMouse = (event: MouseEvent) => {
            if(mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
                setIsMobilNavOpen(false)
            }
        }

        document.addEventListener("mousedown", handleOverMouse)

        return () => {
            document.removeEventListener("mousedown", handleOverMouse)
        }
    }, [isMobilNavOpen]);
    
    useEffect(() => {
        if(isMobilNavOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isMobilNavOpen])

  return (
    <div className={`${styles["mobile-menu"]} ${isMobilNavOpen && styles.show}`} ref={mobileNavRef}>
        {
            isLoggedIn ? (
                <div className={styles["loggedin-navbar"]}>
                    <div className={styles.header}>
                        <div className={styles["user-info"]}>
                            <div className={styles["user-avatar"]}><FaUser /></div>
                            <div className={styles["username"]}>{`${capitalize(user?.name ?? "")} ${capitalize(user?.lastname ?? "")}`}</div>
                        </div>
                        <IoCloseOutline onClick={() => setIsMobilNavOpen(false)}/>
                    </div>
                    <main>
                        <section>
                            <ul>
                                {
                                    accountList.map((menuItem) => (
                                        <li key={menuItem.title} onClick={() => setIsMobilNavOpen(false)}>
                                            <Link to={menuItem.path}>
                                                {menuItem.icon}
                                                <span>{menuItem.title}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                    </main>
                    <footer>
                        <div className={styles.exit}>
                            <Link to={"/"} aria-label='Çıkış yap' onClick={() => setIsMobilNavOpen(false)}>Çıkış Yap</Link>
                        </div>
                    </footer>
                </div>
            ) : (
                <div className={styles["standart-navbar"]}>
                    <div className={styles.header}>
                        <h1>
                            <Link to={"/"} aria-label='Anasayfa' onClick={() => setIsMobilNavOpen(false)}>
                                <img src="/logo/forg.png" alt="Logo" />
                            </Link>
                        </h1>
                        <IoCloseOutline onClick={() => setIsMobilNavOpen(false)}/>
                    </div>
                    <div className={styles.main}>

                        <section className={styles["auth-buttons"]}>
                            <button type="button">
                                <Link to={"/account/login"}>Giriş Yap</Link>
                            </button>
                            <button type="button">
                                <Link to={"/account/register"}>Kayıt Ol</Link>
                            </button>
                        </section>
                        <section>
                            <ul className={styles["menu-list"]}>
                                {
                                    navMenu.map((navItem, index) => (
                                        <li key={index} onClick={() => setIsMobilNavOpen(false)}>
                                            <Link to={navItem.path}>{navItem.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>
                        <section>
                            <ul className={styles["social-links"]}>
                                {
                                    navSocial.map((socialLinks, s) => (
                                        <li key={s}>
                                            <a href={socialLinks.path} target='_blank' rel='noopener noreferer' aria-label={socialLinks.label}>
                                                {socialLinks.icon}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </section>


                    </div>
                </div>
            )
        }
    </div>
   
  )
}

export default MobileMenu