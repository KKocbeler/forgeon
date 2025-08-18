import { IoClose, IoSearchOutline } from "react-icons/io5";
import styles from "./FilterSearchbar.module.scss";
import type React from "react";

interface PropsType {
  temporaryKeyword: string;
  setTemporaryKeyword: (keyword: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  resetSearch: () => void
}

const FilterSearchbar:React.FC<PropsType> = ({temporaryKeyword, setTemporaryKeyword, handleSubmit, resetSearch}) => {
  return (
    <div className={styles["filter-searchbar"]}>
        <form action="" role="search" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles["input-box"]}>
                <input type="text" name="search" value={temporaryKeyword} onChange={(e) => setTemporaryKeyword(e.target.value)} placeholder="Ne Aramıştınız?"/>
                <div className={styles["action-buttons"]}>
                  {
                    temporaryKeyword.length > 0 && (
                      <button type="button" onClick={resetSearch} aria-label="Aramayı Temizle">
                        <IoClose />
                      </button>
                    )
                  }
                  <button type="submit" aria-label="Ara"><IoSearchOutline /></button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FilterSearchbar