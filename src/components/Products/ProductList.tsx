import styles from './ProductList.module.scss';
import { Link } from 'react-router-dom';
import { linkText } from '../../utils/LinkTextEdit';
import type { DataTypes } from '../../types/DataTypes';
import Star from '../Pieces/Star';
import Loading from '../Pieces/Loading';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/app/store';
import { IoSparklesSharp } from 'react-icons/io5';
import Skeleton from '../ui/Skeleton';

interface PropsType {
    filteredProducts: DataTypes[] | []
    loading: boolean
}

const ProductList:React.FC<PropsType> = ({filteredProducts, loading}) => {
    const reduxLoading = useSelector((state: RootState) => state.products.loading)
    const error = useSelector((state: RootState) => state.products.error)
    // if (reduxLoading) {
    //     return (
    //         <div className={styles["loading-full"]}>
    //             <Loading />
    //         </div>
    //     );
    // }

    if (error) {
        return (
            <div className={styles["error-message"]}>
                <p>{error}</p>
            </div>
        );
    }

    if (filteredProducts.length === 0) {
        return (
            <div className={styles["no-product-found"]}>
                <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles["product-list"]}>
                {filteredProducts.map(filteredProduct => (
                    <div className={styles["product-card"]} key={filteredProduct.id}>
                        <Link to={`/products/${linkText(filteredProduct.name)}`}>
                            <div className={styles["card-image"]}>
                                {
                                    reduxLoading
                                        ? <Skeleton />
                                        : <img src={filteredProduct.image} alt={filteredProduct.name} loading='lazy' />
                                }
                            </div>
                            <div className={styles["card-body"]}>
                                <div className={styles["brand-star"]}>
                                    <p>{filteredProduct.brand}</p>
                                    {filteredProduct.comments.length > 0 && (
                                        <Star
                                            count={Number((filteredProduct.comments.reduce((acc, n) => acc + n.rating, 0) / filteredProduct.comments.length).toFixed(0))}
                                            commentCount={filteredProduct.comments.length}
                                        />
                                    )}
                                </div>
                                <div className={styles["product-name"]}>{filteredProduct.name}</div>
                                <div className={styles["product-sale"]}>
                                    {filteredProduct.discount && <div className={styles.discount}>{filteredProduct.discountRate}%</div>}
                                    <div className={styles["product-price"]}>
                                        {filteredProduct.discount && <div className={styles["old-price"]}>₺{filteredProduct.variants[0].price}</div>}
                                        <div className={`${styles["new-price"]} ${filteredProduct.discount ? "" : styles["only-price"]}`}>
                                            ₺{filteredProduct.discount
                                                ? ((filteredProduct.variants[0].price * (100 - filteredProduct.discountRate)) / 100).toFixed(2)
                                                : filteredProduct.variants[0].price}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {filteredProduct.adjustible && (
                            <div className={styles.wrapper}>
                                <div className={styles.adjustable}>
                                    <div className={styles.body}>
                                        {
                                            !reduxLoading && <IoSparklesSharp />
                                        }
                                        <span className={styles.popup}>Özelleştirilebilir</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {loading && (
                <div className={styles.loading}>
                    <Loading />
                </div>
            )}
        </>
    );
};
       

export default ProductList