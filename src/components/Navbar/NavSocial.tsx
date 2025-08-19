import { IoLogoInstagram } from "react-icons/io5";
import styles from "./NavSocial.module.scss";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import type { scrollProps } from "./Navbar";

const navSocialItems = [
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

const NavSocial = ({handleScroll}: scrollProps) => {
  return (
    <div className={`${styles["nav-social"]} ${handleScroll && styles.scrolled}`}>
        <ul>
            {
                navSocialItems.map((socialLink, s) => (
                    <li key={s}>
                        <a href={socialLink.path} aria-label={socialLink.label} title={socialLink.label} target='_blank' rel='noopener noreferer'>{socialLink.icon}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavSocial