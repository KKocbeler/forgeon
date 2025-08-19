import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from './SideCart.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/app/store';
import { addToCart, decreaseProduct, removeFromCart } from '../../redux/features/cart/cartSlice';
import { capitalize } from '../../utils/Capitalized';
import { BsCartFill } from 'react-icons/bs';
import { linkText } from '../../utils/LinkTextEdit';

interface PropsType {
    isCartOpen: boolean;
    setIsCartOpen: (cart: boolean) => void;
}

const SideCart: React.FC<PropsType> = ({isCartOpen, setIsCartOpen}) => {
    const allowedKeys = ["renk", "boyut", "ağaç türü"]
    const dispatch = useDispatch()
    const cartRef = useRef<HTMLDivElement>(null);
    const cart = useSelector((state: RootState) => state.cart.cart);
    const totalPrice = cart.reduce((acc, product) => ((product.variant.price * product.variant.quantity) + acc), 0)

    
    useEffect(() =>{
        const handleOverMouse = (event: MouseEvent) => {
            if(cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false)
            }
        }

        document.addEventListener("mousedown", handleOverMouse)

        return () => {
            document.removeEventListener("mousedown", handleOverMouse)
        }
    }, [isCartOpen]);

    useEffect(() => {
        if(isCartOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isCartOpen])

    return (
        <div className={`${styles["side-cart"]} ${isCartOpen ? styles.show : ""}`}>
            <div className={`${styles.body} ${isCartOpen ? styles.show : ""}`} ref={cartRef}>
                <button type='button' className={styles["close-cart"]} onClick={() => setIsCartOpen(false)}>
                    <IoCloseOutline />
                </button>
                <h3 className={styles["title"]}>Alışveriş Sepetin</h3>
                {
                    cart.length > 0 
                    ? (
                        <ul className={styles["cart"]}>
                            {
                                cart.map(product => (
                                    <li className={styles["product"]} key={product.id}>
                                        <Link to={`/products/${linkText(product.name)}`} onClick={() => setIsCartOpen(false)}>
                                            <div className={styles["product-image"]}>
                                                <img src="/product-image/product-1.webp" alt={product.name} />
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h4 className={styles["product-name"]}>{product.name}</h4>
                                                <div className={styles["product-features"]}>
                                                    {
                                                        Object.entries(product.variant).filter(([key]) => allowedKeys.includes(key)).map(([key, value]) => (
                                                            <div className={styles["product-feature"]}><span>{capitalize(key)}:</span> {capitalize(value as string)}</div>
                                                        ))
                                                    }
                                                    <div className={styles["product-feature"]}><span>Fiyat: </span>₺ {product.variant.price}</div>
                                                </div>
                                                <div className={styles["product-price"]}>
                                                    <div className={styles["count"]}>
                                                        <div className={styles.piece}>Adet:</div>
                                                        <div className={styles["product-quantity"]}>
                                                            <button type='button' aria-label='Azalt' className={styles["quantity-control"]} onClick={() => dispatch(decreaseProduct(product))}><FaMinus /></button>
                                                            <div className={styles.quantity}>{product.variant.quantity}</div>
                                                            <button type='button' aria-label='Arttır' className={styles["quantity-control"]} onClick={() => dispatch(addToCart(product))}><FaPlus /></button>
                                                        </div>
                                                    </div>
                                                    <div className={styles["price"]}> <strong>₺ {(product.variant.price * product.variant.quantity).toFixed(2)}</strong></div>
                                                </div>
                                            </div>
                                        </Link>
                                        <button type='button' aria-label={`${product.name} ürününü sepetten sil`} className={styles["delete-product"]} onClick={() => dispatch(removeFromCart(product))}>
                                            <AiFillDelete />
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
                    )
                    : (
                        <div className={styles["empty-sidecart"]}>
                            <BsCartFill />
                            <p>Sepetnizde hiç ürün yok</p>
                            <Link to={"/products"} aria-label='Alışverişe başla' onClick={() => setIsCartOpen(false)}>Alışverişe Başla</Link>
                        </div>
                    )
                }
                {
                    cart.length > 0 && (
                        <div className={styles["total-price"]}>
                            <div className={styles.total}>
                                <div className={styles.text}>Toplam</div>
                                <div className={styles.number}>₺ {totalPrice && totalPrice.toFixed(2)}</div>
                            </div>
                            <button type='button' className={styles["to-cart"]}>
                                <Link to={'/my-cart'} onClick={() => setIsCartOpen(false)}>SEPETE GİT</Link>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SideCart;
