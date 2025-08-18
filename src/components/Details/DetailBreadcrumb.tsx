import { HiOutlineChevronRight } from 'react-icons/hi';
import styles from './DetailBreadcrumb.module.scss';
import { Link } from 'react-router-dom';

interface PropsType {
    name: string | undefined
}

const DetailBreadcrumb = ({name}: PropsType) => {
    return (
        <div className={styles["detail-breadcrumb"]}>
            <div className={styles["link-box"]}>
                <Link to={"/products"}>Tüm Ürünler</Link>
            </div>
            <HiOutlineChevronRight />
            <div className={styles["link-box"]}>
                <Link to={"/products"}>Ahşap Tablolar</Link>
            </div>
            <HiOutlineChevronRight />
            <div className={styles["link-box"]}>
                <Link to={"/products"}>{name}s</Link>
            </div>
        </div>
    )
}

export default DetailBreadcrumb