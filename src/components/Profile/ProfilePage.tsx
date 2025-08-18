import { NavLink, Outlet } from "react-router-dom";
import styles from "./ProfilePage.module.scss";
import { FaUser } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { PiAddressBookLight } from "react-icons/pi";
import { CiHeart, CiLogout, CiSettings, CiShoppingCart } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { useState } from "react";
import { capitalize } from "../../utils/Capitalized";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/app/store";


const accountList = [
        {
            icon: <LuUser />,
            title: "Profilim",
            path: "/profile"
        },
        {
          icon: <PiAddressBookLight />,
          title: "Adreslerim",
          path: "addresses"
        },
        {
          icon: <CiShoppingCart />,
          title: "Siparişlerim",
          path: "orders"
        },
        {
          icon: <CiHeart />,
          title: "Favorilerim",
          path: "favorites"
        },
        {
          icon: <CiSettings />,
          title: "Ayarlar",
          path: "settings"
        },
        {
          icon: <CiLogout />,
          title: "Çıkış Yap",
          path: "/"
        },
];

const ProfilePage = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const [isActive, setIsActive] = useState("")

    return (
    <div className={`${styles["profile-page"]} container`}>
        <aside className={styles["profile-aside"]}>
            <div className={styles["user-info"]}>
                <div className={styles["user-avatar"]}><FaUser /></div>
                <div className={styles["username"]}>{`${capitalize(user?.name ?? "")} ${capitalize(user?.lastname ?? "")}`}</div>
                <div className={styles["user-email"]}>{user?.email}</div>
            </div>
            <ul className={styles["account-list"]}>
                {
                    accountList.map((item, index) => (
                        <li key={index} className={styles["account-item"]}>
                            <NavLink className={`${isActive === item.title && styles.active}`} to={item.path as string} onClick={() => setIsActive(item.title)} aria-label={item.title}>
                                <div className={styles["account-item-content"]}>           
                                    <div className={styles["list-icon"]}>{item.icon}</div>
                                    <span>{item.title}</span>
                                </div>
                                <GoChevronRight />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </aside>
        <main className={styles["profile-main"]}>
            <Outlet/>
        </main>
    </div>
    )
}

export default ProfilePage
