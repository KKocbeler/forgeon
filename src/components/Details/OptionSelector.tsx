
import type { Dispatch, SetStateAction } from 'react';
import styles from './OptionSelector.module.scss';
import { capitalize } from '../../utils/Capitalized';

interface PropsType {
    optionValues: {label: string, key:string, values: string[]}[] | undefined;
    stockOptions: { [key: string]: string }
    setStockOptions: Dispatch<SetStateAction<{ [key: string]: string }>>
}

const OptionSelector:React.FC<PropsType> = ({optionValues, stockOptions, setStockOptions}) => {
  return (
    <div>
        {
            optionValues?.map((option) => (
                <div className={styles["option-selector"]} key={option.key}>
                    <h2 className={styles["option-selector__title"]}>
                        {capitalize(option.label)}
                    </h2>
                    <ul className={styles["option-selector__list"]}>
                        {option.values.map((value, s) => (
                            <li
                                key={s}
                                className={`${styles["option-selector__item"]} ${stockOptions?.[option.key] === value ? styles["active"] : ""}`} 
                                onClick={() => setStockOptions((prev) => ({...prev,[option.key]: value,}))}
                            >
                                {capitalize(value)}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}

export default OptionSelector