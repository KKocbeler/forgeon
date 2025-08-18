import type { SetStateAction } from "react";
import type { Order } from "../../../../../types/UserTypes";
import styles from "./OrderDetail.module.scss";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../../redux/app/store";

interface TypeProps {
    chosenOrder: Order | null;
    setChosenOrder: React.Dispatch<SetStateAction<Order | null>>
}

const OrderDetails = ({ chosenOrder, setChosenOrder }: TypeProps) => {
    const user = useSelector((state: RootState) => state.user.user);
    const chosenAddress = user.addresses.filter(address => address.id === chosenOrder?.shippingAddressId);
    const addressLine =  chosenAddress.length > 0 ? chosenAddress[0].addressLine : null; 

    if (!chosenOrder) {
        return (
            <div className={styles["order-details-empty"]}>
                <p>Henüz bir sipariş seçmediniz.</p>
            </div>
        );
    }


    return (
        <div className={styles["order-details"]}>
           
            <header className={styles["order-header"]}>
                <h2 className={styles["header-title"]}>Sipariş Detayları</h2>
                <button
                    className={styles["back-btn"]}
                    type="button"
                    aria-label="Geri"
                    onClick={() => setChosenOrder(null)}
                >
                    <IoArrowBack />
                </button>
            </header>
            <div className={styles["order-info"]}>
                <h3>Sipariş No: {chosenOrder.orderId}</h3>
                <span className={`${styles.status} ${styles[chosenOrder.status.replace(/\s/g, '')]}`}>
                    {chosenOrder.status}
                </span>
            </div>
            <p className={styles["order-date"]}>
                {new Date(chosenOrder.orderDate).toLocaleDateString("tr-TR")}
            </p>
            <section className={styles["order-items"]}>
                {chosenOrder.items.map((item) => (
                    <div className={styles["order-item"]} key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles["item-info"]}>
                            <h4>{item.name}</h4>
                            <p>{item.variant.quantity} adet x {item.variant.price.toFixed(2)} ₺</p>
                        </div>
                        <strong className={styles["item-total"]}>
                            {(item.variant.price * item.variant.quantity).toFixed(2)} ₺
                        </strong>
                    </div>
                ))}
            </section>
            <footer className={styles["order-footer"]}>
                <div className={styles["order-summary"]}>
                    <p><strong>Toplam:</strong> {chosenOrder.totalPrice.toFixed(2)} ₺</p>
                    <p><strong>Ödeme Yöntemi:</strong> {chosenOrder.paymentMethod}</p>
                </div>
                <div className={styles["order-address"]}>
                    <strong>Teslimat Adresi</strong>:
                    {
                        addressLine 
                            ? <p>{addressLine}</p>
                            : <p>Adrese şuan erişilemiyor.</p>
                    }
                </div>
            </footer>
        </div>
    );
};

export default OrderDetails