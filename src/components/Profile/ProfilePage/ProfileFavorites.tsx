import { useDispatch, useSelector } from 'react-redux';
import styles from './ProfileFavorites.module.scss';
import type { RootState } from '../../../redux/app/store';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import type { DataTypes } from '../../../types/DataTypes';
import Star from '../../Pieces/Star';
import { Link } from 'react-router-dom';
import { linkText } from '../../../utils/LinkTextEdit';
import { handleFavorites } from '../../../redux/features/user/userSlice';
const ProfileFavorites = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.user)
    const products = useSelector((state: RootState) => state.products.products);
    const favProducts: DataTypes[] = products.filter(product => user.favorites.includes(product.id))
  return (
        <div className={styles["profile-favorites"]}>
            <header>
                <h1>Favorilerim</h1>
            </header>
            <main>
                <section>
                    <article className={styles["favorite-products"]}>
                        {
                        favProducts.map(product => (
                            <div className={styles["favorite-product"]} key={product.id}>
                                <div className={styles["product-image"]}>
                                    <Link to={`/products/${linkText(product.name)}`}>
                                        <img src={product.image} alt={`${product.name} - ${product.brand}`} loading='lazy' title={product.name}/>
                                    </Link>
                                </div>
                                <div className={styles["product-info"]}>
                                    <h3>
                                        <Link to={`/products/${linkText(product.name)}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    {
                                        product.comments.length > 0 && (
                                            <span>
                                                <Star 
                                                    count={product.comments.reduce((acc, pd) => pd.rating + acc, 0) / product.comments.length} 
                                                    commentCount={product.comments.length}
                                                />
                                            </span>
                                        )
                                    }
                                    <div className={styles.price}>
                                        <span>{product.variants[0].price} ₺</span>
                                    </div>
                                </div>
                                <div 
                                    className={styles.fav} 
                                    onClick={() => dispatch(handleFavorites(product.id))}
                                    aria-label={user.favorites.includes(product.id) ? "Favoriden kaldır" : "Favorilere ekle"}
                                    title={user.favorites.includes(product.id) ? "Favoriden kaldır" : "Favorilere ekle"}
                                    role='button'
                                    tabIndex={0} 
                                    onKeyDown={(e) => e.key === "Enter" && dispatch(handleFavorites(product.id))}
                                >
                                    { user.favorites.includes(product.id) ? <IoMdHeart /> : <IoMdHeartEmpty />}
                                </div>
                            </div>
                        ))
                        }
                    </article>
                </section>
            </main>
        </div>
  )
}

export default ProfileFavorites