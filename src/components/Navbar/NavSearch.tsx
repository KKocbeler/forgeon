import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import styles from './NavSearch.module.scss';
import { useEffect, useRef, useState } from 'react';

interface PropsType {
    handleScroll: boolean;
}

const NavSearch = ({handleScroll}: PropsType) => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(toggleSearch && inputRef.current) {
            inputRef.current.focus();
        }
    }, [toggleSearch])

  return (
    <div className={`${styles["nav-search"]} ${handleScroll ? styles.scrolled : ""} `}>
        <IoSearchOutline  onClick={() => setToggleSearch(!toggleSearch)}/>
        <div className={`${styles["search-body"]} ${toggleSearch ? styles.active : ""}`}>
            <div className={styles.logo}>
                <img src="/logo/forg.png" alt="Company Logo" loading='lazy'/>
            </div>
            <form action="">
                <div className={styles["input-box"]}>
                    <IoSearchOutline />
                    <input type="text" placeholder='Ne Aramıştınız ?' aria-label='Search' ref={inputRef}/>
                </div>

            </form>
            <div className={styles["close-button"]} >
                <button type='button' onClick={() => setToggleSearch(false)}><IoCloseOutline/></button>
            </div>
        </div>
    </div>
  )
}

export default NavSearch