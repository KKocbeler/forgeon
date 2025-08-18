import { FaStar } from 'react-icons/fa';
import styles from './Star.module.scss';

interface PropsType {
  size?: string;
  count: number;
  commentCount?: number
}

const Star: React.FC<PropsType> = ({ size , count, commentCount}) => {
  const totalStars = 5;
  const filledStars = count;
  const emptyStars = totalStars - filledStars;
  
  return (
    <div className={`${styles.star} ${size}`}>
      <div className={styles["star-icons"]}>
        {[...Array(filledStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {[...Array(emptyStars)].map((_, j) => (
          <FaStar key={j + filledStars} className={styles.unlight} />
        ))}
      </div>
      <div className={styles["comment-count"]}>
        {size === "large" ? `(${commentCount} Reviews)` : `(${commentCount})`}
      </div>
    </div>
  );
};

export default Star;