import styles from './TrustBadges.module.scss';
import { FaLeaf } from 'react-icons/fa';
import { TbFlag } from 'react-icons/tb';
import { IoMdReturnLeft } from 'react-icons/io';

const badges = [
  {
    icon: <FaLeaf />,
    title: "Çevre Dostu",
    description: "Doğal ve sürdürülebilir malzemeler.",
  },
  {
    icon: <TbFlag />,
    title: "Yerli Üretim",
    description: "Tüm ürünler Türkiye’de üretilir.",
  },
  {
    icon: <IoMdReturnLeft />,
    title: "İade & Değişim",
    description: "Kolay iade ve değişim imkânı yok.",
  },
];

const TrustBadges = () => {
    return (
        <div className={styles["trust-badges"]}>
            <ul className={styles["trust-badges-list"]}>
                {
                    badges.map((badge, index) => (
                        <li className={styles["trust-badge-items"]} key={index}>
                            {badge.icon}
                            <p>{badge.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TrustBadges