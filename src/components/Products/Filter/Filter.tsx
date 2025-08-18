import styles from './Filter.module.scss';
import FilterSearchbar from './FilterSearchbar';
import { LuArrowUpDown } from 'react-icons/lu';

interface PropsType {
  sorts: { label: string, value: string }[]
  temporaryKeyword: string
  setTemporaryKeyword: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isFilterOpen: boolean
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleSort: (type: { label: string; value: string; }) => void
  filterLabel: string
  resetSearch: () => void
}

const Filter:React.FC<PropsType> = ({temporaryKeyword, handleSubmit, setTemporaryKeyword, setIsFilterOpen, isFilterOpen, sorts, handleSort, filterLabel, resetSearch}) => {

    return (
        <div className={styles.filter}>
            <FilterSearchbar temporaryKeyword={temporaryKeyword} handleSubmit={handleSubmit} setTemporaryKeyword={setTemporaryKeyword} resetSearch={resetSearch}/>
            <div className={styles["filter-section"]} >
                <div 
                    className={styles["selected-order"]} 
                    role='button'
                    tabIndex={0}
                    aria-haspopup="listbox"
                    aria-expanded={isFilterOpen}
                    aria-label='Filtreleme seçeneklerini aç/kapa'
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    onKeyDown={(e) => {
                            if(e.key === "Enter" || e.key === " ") {
                                e.preventDefault()
                                setIsFilterOpen(!isFilterOpen)
                            }
                        }
                    }
                >
                    {filterLabel}
                    <LuArrowUpDown />
                </div>
                    <ul className={`${styles["filter-list"]} ${isFilterOpen ? styles.show : ""}`}>
                        {
                            sorts.map((sort) => (
                                <li 
                                    key={sort.value} 
                                    onClick={() => handleSort(sort)} 
                                    role='option' tabIndex={0} 
                                    aria-selected={filterLabel === sort.label}
                                    onKeyDown={(e) => {
                                        if(e.key === "Enter" || e.key === " ") {
                                            e.preventDefault()
                                            handleSort(sort)
                                        }
                                    }}
                                >
                                    <span>{sort.label}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}

export default Filter