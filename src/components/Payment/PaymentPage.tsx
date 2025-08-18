import styles from './PaymentPage.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/app/store';

const PaymentPage = () => {
    const cartProducts = useSelector((state: RootState) => state.cart.cart)
    console.log(cartProducts)
  return (
    <div className={styles["payment-page"]}>

    </div>
  )
}

export default PaymentPage