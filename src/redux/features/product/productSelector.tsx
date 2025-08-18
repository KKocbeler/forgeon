import { createSelector } from "reselect";
import type { RootState } from "../../app/store";

const selectAllProducts = (state: RootState) => state.products.products;
const selecKeyword = (state: RootState) => state.products.keyword;
const selecSortType = (state: RootState) => state.products.sortType

export const selectFilteredProducts = createSelector(
    [selectAllProducts, selecKeyword, selecSortType],
    (products, keyword, sortType) =>{
        let filtered = [...products]

        if(keyword.trim()) {
            const lowerKeyword = keyword.trim().toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(lowerKeyword) ||
                product.brand.toLowerCase().includes(lowerKeyword) ||
                product.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
            )
        }

        switch (sortType) {
            case "FIYAT_ARTAN":
                return filtered.sort((a,b) => a.variants[0].price - b.variants[0].price)
            case "FIYAT_AZALAN":
                return filtered.sort((a,b) => b.variants[0].price - a.variants[0].price)
            case "OZELLESTIRILEBILIR":
                return filtered.filter(product => product.adjustible)
            case "EN_FAZLA_INDIRIM":
                return filtered
                    .filter(product => product.discount)
                    .sort((a, b) => b.discountRate - a.discountRate);
            default:
                return filtered
        }
    }
)