import { useSelector } from "react-redux";
import styles from "./ProfileOrders.module.scss";
import type { RootState } from "../../../../redux/app/store";
import { capitalize } from "../../../../utils/Capitalized";
import { Link } from "react-router-dom";
import { linkText } from "../../../../utils/LinkTextEdit";
import { useState } from "react";
import OrderDetails from "./ProfileOrderComponents/OrderDetails";
import type { Order } from "../../../../types/UserTypes";

const ProfileOrders = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [chosenOrder, setChosenOrder] = useState<Order | null>(null);

    const handleDetail = (id: any) => {
        const filtered = user.orders.filter(order => order.orderId === id)
        setChosenOrder(filtered[0])
    }

    return (
        chosenOrder ? (
            <OrderDetails chosenOrder={chosenOrder} setChosenOrder={setChosenOrder}/>
        ) : (
            <div className={styles["orders-page"]}>
                <header>
                    <h1>Siparişlerim</h1>
                </header>
                <section className={styles["orders-list"]}>
                    {user.orders.map(order => {
                        return (
                            <div className={styles.order} key={order.orderId}>
                                <div className={styles["order-header"]}>
                                    <h2>Sipariş No: {order.orderId}</h2>
                                    <span className={`${styles.status} ${styles[order.status.replace(/\s/g, '')]}`}
                                        >
                                            {capitalize(order.status)}
                                        </span>
                                </div>
                                <p className={styles.date}>
                                    {new Date(order.orderDate).toLocaleDateString("tr-TR")}
                                </p>
                                <div className={styles["order-summary"]}>
                                    <div className={styles["product-images"]}>
                                        {
                                            order.items.slice(0, 3).map(item => (
                                                <Link to={`/products/${linkText(item.name)}`} key={item.id}>
                                                    <img src={item.image} alt={item.name} loading="lazy"/>
                                                </Link>
                                                
                                            ))
                                        }
                                        {
                                            order.items.length > 3 && <span>+{order.items.length - 3} Ürün</span>
                                        }
                                    </div>
                                    <div className={styles["product-footer"]}>
                                        <p><strong>Toplam:</strong> {order.totalPrice.toFixed(2)} ₺</p>
                                        <button type="button" aria-label="Sipariş detayı" onClick={() => handleDetail(order.orderId)}>Sipariş Detayı</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
        )
    );
};

export default ProfileOrders;
