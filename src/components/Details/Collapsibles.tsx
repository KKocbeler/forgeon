import { GoPlus } from 'react-icons/go';
import styles from './Collapsibles.module.scss';
import { useState } from 'react';
import type { InfoSections } from '../../types/DataTypes';

interface PropsType {
    infoSection: InfoSections[]
}

const Collapsibles = ({infoSection}: PropsType) => {
    const [openCollapsibles, setOpenCollapsibles] = useState<number[]>([])
    const handleCollaps = (index: number) => {
        setOpenCollapsibles(prev =>
            prev.includes(index)
            ? prev.filter(openId => openId !== index)
            : [...prev, index]
        )
    }

    return (
        <div className={styles["collapsibles"]}>
            {
                infoSection?.map((item, index) => (
                    <div className={styles["collapsible-cart"]} key={index}>
                        <div className={styles["collapsible-header"]} onClick={() => handleCollaps(index)}>
                            <div className={styles["collaps-title"]}>{item.title}</div>
                            <GoPlus /> 
                        </div>
                        <div className={`${styles.content} ${openCollapsibles.includes(index) ? styles.show : ""}`}>{item.content}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Collapsibles