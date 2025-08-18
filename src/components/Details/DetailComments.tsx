import type { DataTypes } from '../../types/DataTypes';
import Star from '../Pieces/Star';
import styles from './DetailComments.module.scss';
import { AiFillDislike, AiFillLike } from "react-icons/ai";

interface PropsType {
    selectedProduct: DataTypes | undefined
    setSelectedProducts: React.Dispatch<React.SetStateAction<DataTypes | undefined>>
}

const DetailComments:React.FC<PropsType> = ({selectedProduct, setSelectedProducts}) => {

    const increaseLike = (id: string) => {
        setSelectedProducts(prev => {
            if(!prev) return prev

            const updatedComments = prev.comments.map(comment => {
                return comment.id === id
                    ? {...comment, totalLikes: comment.totalLikes + 1}
                    : comment
            })

            return {
                ...prev,
                comments: updatedComments
            }
        })
    } 
    const decraseLike = (id: string) => {
        setSelectedProducts(prev => {
            if(!prev) return prev

            const updatedComments = prev.comments.map(comment => {
                return comment.id === id
                    ? {...comment, totalLikes: comment.totalLikes - 1}
                    : comment
            })

            return {
                ...prev,
                comments: updatedComments
            }
        })
    }   

  return (
    <section className={styles["comments-section"]}>
      <h2>Değerlendirmeler</h2>
      {
        selectedProduct?.comments.map(comment => (
          <div className={styles.comment} key={comment.id}>
            <div className={styles.avatar}>
              <img src="/avatar/avatar.webp" alt="Kullanıcı avatarı" />
            </div>
            <div className={styles["comment-body"]}>
              <div className={styles["comment-header"]}>
                <div className={styles.username}>
                    {comment.username} 
                    <span className={styles["created-at"]}>{new Date(comment.createdAt).toLocaleString()}</span>
                </div>
                <Star count={comment.rating}/>
              </div>
              <div className={styles["comment-message"]}>{comment.message}</div>
              <div className={styles["comment-actions"]}>
                <div className={styles.vote}>
                    <AiFillDislike onClick={() => decraseLike(comment.id)}/>
                    <span> {comment.totalLikes}</span>
                    <AiFillLike onClick={() => increaseLike(comment.id)}/>
                </div>
                <div className={styles.report}>Report</div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
};

export default DetailComments;
