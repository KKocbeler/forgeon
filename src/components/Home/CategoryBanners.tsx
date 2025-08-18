import { Link } from 'react-router-dom';
import styles from './CategoryBanners.module.scss';

const bannerImages = [
    {name: "Image1", path: "/category-banner/image-1.webp", title: "KIDS TOYS & GIFTS"},
    {name: "Image2", path: "/category-banner/image-2.webp", title: "WINE CORK BOX"},
    {name: "Image3", path: "/category-banner/image-3.webp", title: "RECIPE BINDERS"}
]

const CategoryBanners = () => {
  return (
    <div className={styles["category-banners"]}>
        {
            bannerImages.map((image, index) => (
                <div key={index}>
                    <Link to={'/'}>
                        <img src={image.path} alt={image.name} loading='lazy'/>
                        <h3 className={styles.name}>{image.title}</h3>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default CategoryBanners