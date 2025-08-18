import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { IoBagOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import NavSearch from './NavSearch';
import { useEffect, useState } from 'react';
import SideCart from './SideCart';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/app/store';
import NavSocial from './NavSocial';
import DesktopNavMenu from './NavMenu/DesktopNavMenu';
import MobileMenu from './NavMenu/MobileMenu';
import { IoIosMenu } from 'react-icons/io';

export interface scrollProps {
    handleScroll: boolean
}


const Navbar = () => {
    const [handleScroll, setHandleScroll] = useState(false);
    const [isMobilNavOpen, setIsMobilNavOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cart = useSelector((state: RootState) => state.cart.cart)
    const productCount: number = cart.reduce((acc, pd) => (pd.variant.quantity + acc), 0)

    useEffect(() => {
        const handleScroll = () => {
            setHandleScroll(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        return() => {
            window.removeEventListener("scroll", handleScroll)
        }
        
    }, [])
  return (
    <nav className={handleScroll ? styles.scrolled : ""}>
        <div className={`${styles.navbar} ${handleScroll ? styles.scrolled : ""}`}>
            <div className={styles["hamburger-menu"]}>
                <IoIosMenu onClick={() => setIsMobilNavOpen(true)}/>
                <h1>
                    <Link to={"/"} aria-label='Anasayfa'>Forgeon</Link>
                </h1>
            </div>
            <NavSocial handleScroll={handleScroll}/>
            <DesktopNavMenu handleScroll={handleScroll}/>
            <div className={styles["user-section"]}>
                <div><NavSearch  handleScroll={handleScroll}/></div>
                <div>
                    <Link to={'/account/login'}>
                        <AiOutlineUser />
                    </Link>
                </div>
                <div className={styles['open-sidecart']} onClick={() => setIsCartOpen(true)}>
                    <IoBagOutline />
                    {
                        productCount > 0 &&  (
                            <span>{productCount}</span>
                        )
                    }
                </div>
            </div>
        </div>
        <MobileMenu isMobilNavOpen={isMobilNavOpen} setIsMobilNavOpen={setIsMobilNavOpen}/>
        <SideCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </nav>
  )
}

export default Navbar