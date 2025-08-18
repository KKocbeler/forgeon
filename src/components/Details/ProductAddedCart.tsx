import { TiTick } from "react-icons/ti";
import type { DataTypes } from "../../types/DataTypes";
import { capitalize } from "../../utils/Capitalized";
import styles from "./ProductAddedCart.module.scss";

interface PropsType {
  selectedProduct: DataTypes | undefined
  price: number | undefined
  miniCart: boolean;
  stockOptions: {
    [key: string]: string | undefined
  }
}
const ProductAddedCart = ({selectedProduct, miniCart, stockOptions, price}: PropsType) => {
    return (
        <div className={`${styles["add-cart"]} ${miniCart ? styles.show : ""}`} aria-live="polite" role="status">
            <div className={styles["cart-image"]}>
                <img src="/detail/detail-1.webp" alt={selectedProduct?.name} loading="lazy"/>
            </div>
            <div className={styles["cart-body"]}>
                <div className={styles.name}>
                    {selectedProduct?.name}
                    <span><TiTick /></span>
                </div>
                <div className={styles["selected-features"]}>
                    {
                        Object.entries(stockOptions ?? {}).map(([key, values]) => (
                            <div key={key}>
                                {capitalize(key)}: <span>{capitalize(values as string)}</span>
                            </div>
                        ))
                    }
                    <div>
                        Fiyat: <span>₺{price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductAddedCart