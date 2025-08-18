import { useDispatch, useSelector } from 'react-redux';
import styles from './MyCartPage.module.scss';
import type { RootState } from '../../redux/app/store';
import { capitalize } from '../../utils/Capitalized';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { addToCart, decreaseProduct, removeFromCart } from '../../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { linkText } from '../../utils/LinkTextEdit';

const MyCartPage = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();
    const allowedKeys = ["boyut", "agaç türü", "renk"];
    const ProductsLenght = cart.reduce((acc, pd) => (pd.variant.quantity + acc), 0);
    const subTotal = cart.reduce((acc, pd) => (pd.variant.price * pd.variant.quantity + acc), 0);
    const TotalPrice = cart.reduce((acc, pd) => ((pd.variant.price * pd.variant.quantity / 100 * (100 - pd.discountRate)) + acc), 0);
    const differance = subTotal - TotalPrice;
    const shippingPrice = 75;
  return (
    <main className={styles["my-cart"]}>
        {
            cart.length > 0 ? (
                <div className={styles.cart}>
                    <section className={styles["cart-items"]} aria-labelledby='my-cart'>
                        <h1 id='my-cart'>Sepetim ({ProductsLenght})</h1>
                        {
                            cart.map(product => (
                                <div className={styles["product-cart"]} key={product.id}>
                                    <div className={styles["cart-image"]}>
                                        <Link to={`/products/${linkText(product.name)}`}>
                                            <img src={product.image} alt={`${product.brand} - ${product.name}`} />
                                        </Link>
                                    </div>
                                    <div className={styles["cart-body"]}>
                                        <div className={styles["body-top"]}>
                                            <h3 className={styles.name}>
                                                <Link to={`/products/${linkText(product.name)}`}>
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <div className={styles.info}>Fiyat: <span>₺ {(product.variant.price / 100 * (100 - product.discountRate)).toFixed(2)}</span></div>
                                            <div className={styles["other-infos"]}>
                                                <div className={styles.info}>Ürün Kodu: <span>{product.id}</span></div>
                                                {Object.entries(product.variant).filter(([key]) => allowedKeys.includes(key)).map(([key, value]) => (
                                                    <div className={styles.info}>{capitalize(key)}: <span>{capitalize(value as string)}</span></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles["body-bottom"]}>
                                            <p className={styles.info}>Adet:</p>
                                            <div className={styles["product-quantity"]}>
                                                <div className={`${styles["quantity-control"]} ${product.variant.quantity === 1 ? styles.passive : ""}`} onClick={() => dispatch(decreaseProduct(product))} role='button' aria-label='Ürünü bir azalt'><FaMinus /></div>
                                                <div className={styles.quantity}>{product.variant.quantity}</div>
                                                <div className={styles["quantity-control"]} onClick={() => dispatch(addToCart(product))} role='button' aria-label='Ürünü bir arttır'><FaPlus /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["delete-product"]}>
                                        <button onClick={() => dispatch(removeFromCart(product))} type='button' aria-label='Ürünü sepetten sil'><RxCross2 /></button>
                                    </div>
                                    <div className={styles["price-section"]}>
                                        {
                                            product.discountRate !== 1 && (
                                                <div className={styles["old-price"]}>
                                                    <span>{(product.variant.price * product.variant.quantity).toFixed(2)} ₺</span>
                                                </div>
                                            )
                                        }
                                        {
                                            product.discountRate > 1 ? (
                                                <div className={styles["new-price"]}>
                                                    <span>{((product.variant.price / 100 * (100 - product.discountRate))*(product.variant.quantity)).toFixed(2)} ₺</span>
                                                </div>
                                            ) : (
                                                <div className={styles["new-price"]}>
                                                    <span>{product.variant.price.toFixed(2)}</span>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            ))
                        }
                        <div className={styles["return-shopping"]}>
                            <Link to={"/products"} aria-label='Ürün sayfasına dön'>Alışverişe devam et.</Link>
                        </div>
                    </section>
                    <aside className={styles["cart-summary"]}>
                        <h2>Sipariş Özeti</h2>
                        <div className={styles.summary}>
                            <div className={styles["price-info"]}>
                                <div className={styles["sb-price"]}>
                                    <p>Ara Toplam</p>
                                    <span>{subTotal.toFixed(2)} ₺</span>
                                </div>
                                {
                                    differance !== 0 && (
                                        <div className={styles["sb-price"]}>
                                            <p>İndirim</p>
                                            <span>- {differance.toFixed(2)} ₺</span>
                                        </div>
                                    )
                                }
                                {
                                    <div className={styles["sb-price"]}>
                                        <p>Kargo Ücreti</p>
                                        {
                                            TotalPrice >= 200 
                                                ? <span>0.00 ₺</span>
                                                : <span>{shippingPrice} ₺</span>
                                        }
                                    </div>
                                }
                                <div className={styles["sb-price"]}>
                                    <p>Toplam</p>
                                    <span>{(TotalPrice + shippingPrice).toFixed(2)} ₺</span>
                                </div>
                            </div>

                            <div className={styles["to-payment"]}>
                                <Link to={"/payment"} role='button' aria-label='Alışverişi Tamamla'>ALIŞVERİŞİ TAMAMLA</Link>
                            </div>
                            <div className={styles['shipping-message']}>
                                <MdOutlineLocalShipping />
                                <p>200tl ve üzeri alışverişlerde kargo ücretsiz.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            ) : (
                <div className={styles["empty-cart"]}>
                       <div className={styles.icon}>
                            <FaShoppingCart />
                       </div>
                       <h2>Görünüşe göre sepetinizde henüz ürün yok.</h2>
                       <Link to={"/products"} role='button' aria-label='Alışverişe başla'>Alışverişe Başla</Link>
                </div>
            )
        }

    </main>
  )
}

export default MyCartPage