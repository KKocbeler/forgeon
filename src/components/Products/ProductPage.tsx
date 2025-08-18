import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import ProductList from './ProductList';
import styles from "./ProductPage.module.scss";
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch } from '../../redux/app/store';
import { selectFilteredProducts } from '../../redux/features/product/productSelector';
import { setKeyword, setSortType } from '../../redux/features/product/productSlice';

const sorts = [
  { label: "Önerilen", value: "ONERILEN"},
  { label: "Artan Fiyat", value: "FIYAT_ARTAN" },
  { label: "Azalan Fiyat", value: "FIYAT_AZALAN" },
  { label: "Özelleştirilebilir", value: "OZELLESTIRILEBILIR" },
  { label: "İndirim", value: "EN_FAZLA_INDIRIM" },
];

const ProductPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filteredProducts = useSelector(selectFilteredProducts)
    const [temporaryKeyword, setTemporaryKeyword] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [filterLabel, setFilterLabel] = useState<string>("Önerilen");
    const [searchParams, setSearchParams] = useSearchParams();
    const [visibleCount, setVisibleCount] = useState(16)
    const [loading, setLoading] = useState(false)
    const visibleProducts = filteredProducts.slice(0, visibleCount)
    useEffect(() => {
        const urlKeyword = searchParams.get("search") || "";
        dispatch(setKeyword(urlKeyword))
    }, [searchParams])

    // burası ürünleri 16'şar yüklüyo
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            if(scrollTop + windowHeight >= docHeight - 100 && filteredProducts.length > visibleCount) {
                setLoading(true)
                setTimeout(() => {
                    setVisibleCount((prev) => prev + 16)
                    setLoading(false)
                }, 1000);
                
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    })



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearchParams({ search: temporaryKeyword})
    }

    const resetSearch = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams .delete("search")
        setSearchParams(newParams)
        setTemporaryKeyword("")
    }

    const handleSort = (sort: { label: string; value: string; }) => {
        setIsFilterOpen(false)
        dispatch(setSortType(sort.value))
        setFilterLabel(sort.label)
    };


  return (
    <div className={styles["product-page"]}>
        <h1>Tüm Ürünler</h1>
        <Filter
            sorts={sorts}
            temporaryKeyword={temporaryKeyword} 
            setTemporaryKeyword={setTemporaryKeyword} 
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            handleSubmit={handleSubmit}
            handleSort={handleSort}
            filterLabel={filterLabel}
            resetSearch={resetSearch}
        />
        <ProductList filteredProducts={visibleProducts} loading={loading}/>
    </div>
  )
}

export default ProductPage