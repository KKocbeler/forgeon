import styles from './ProductList.module.scss';
import { Link } from 'react-router-dom';
import { linkText } from '../../utils/LinkTextEdit';
import type { DataTypes } from '../../types/DataTypes';
import Star from '../Pieces/Star';
import { SiWolfram } from 'react-icons/si';
import Loading from '../Pieces/Loading';

interface PropsType {
    filteredProducts: DataTypes[] | []
    loading: boolean
}

const ProductList:React.FC<PropsType> = ({filteredProducts, loading}) => {
  return (
    <>
        {
            filteredProducts.length > 0 ? (
                <>
                <div className={styles["product-list"]}>
                    {
                            filteredProducts?.map(filteredProduct => (
                                <div className={styles["product-card"]} key={filteredProduct.id}>
                                    <Link to={`/products/${linkText(filteredProduct.name)}`}>
                                        <div className={styles["card-image"]}>
                                            <img src={filteredProduct.image} alt={filteredProduct.name} loading='lazy'/>
                                        </div>
                                        <div className={styles["card-body"]}>
                                            <div className={styles["brand-star"]}>
                                                <p>{filteredProduct.brand}</p>
                                                {
                                                    filteredProduct.comments.length > 0 && (
                                                        <Star
                                                            count={Number((filteredProduct.comments.reduce((acc, n) => acc + n.rating, 0) / filteredProduct.comments.length).toFixed(0))}
                                                            commentCount={filteredProduct.comments.length}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <div className={styles["product-name"]}>{filteredProduct.name}</div>
                                            <div className={styles["product-sale"]}>
                                                {
                                                    filteredProduct.discount && <div className={styles.discount}>{filteredProduct.discountRate}%</div>
                                                }
                                                <div className={styles["product-price"]}>
                                                    { filteredProduct.discount && <div className={styles["old-price"]}>₺{filteredProduct.variants[0].price}</div>}
                                                    <div className={`${styles["new-price"]} ${filteredProduct.discount ? "" : styles["only-price"]}`}>₺{(filteredProduct.variants[0].price / 100 * (100 - filteredProduct.discountRate)).toFixed(2)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    {
                                        filteredProduct.adjustible && (
                                            <div className={styles.wrapper}>
                                                <div className={styles.adjustable}>
                                                    <div className={styles.body}>
                                                        <SiWolfram />
                                                        <span className={styles.popup}>Özelleştirilibilir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )) 
                    }
                </div>
                {
                     loading && (
                        <div className={styles.loading}>
                            <Loading />
                        </div>
                     )
                }

                </>
            ) : (  
                <div className={styles["no-product-found"]}>
                    <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                </div>
            )
        }
    </>
  );
};

export default ProductList