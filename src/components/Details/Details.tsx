import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Details.scss';
import data from '../../data/data.json';
import { linkText } from '../../utils/LinkTextEdit';
import type { DataTypes } from '../../types/DataTypes';
import { addToCart } from '../../redux/features/cart/cartSlice';
import DetailBreadcrumb from './DetailBreadcrumb';
import TrustBadges from './TrustBadges';
import Collapsibles from './Collapsibles';
import DetailGallery from './DetailGallery';
import OptionSelector from './OptionSelector';
import ProductAddedCart from './ProductAddedCart';
import DetailComments from './DetailComments';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

const Details = () => {
    const [selectedProduct, setSelectedProduct] = useState<DataTypes>();
    const [stockOptions, setStockOptions] = useState<{ [key: string]: string }>({}); 
    const [miniCart, setMiniCart] = useState(false) //Yandan çıkan şey eklenince sepete
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch()
    const { name } = useParams()
    
    useEffect(() => {
        const foundProduct = data.filter(dt => linkText(dt.name) === name)
        setSelectedProduct(foundProduct[0])
    }, [name])
    console.log(stockOptions)
    useEffect(() => {
        if(selectedProduct?.optionValues) {
            const initialOptions: { [key: string]: string} = {};

            selectedProduct.optionValues.forEach((option) => {
                if(option.values && option.values.length > 0) {
                    initialOptions[option.key] = option.values[0]
                }
            })

            setStockOptions(initialOptions)
        }
    }, [selectedProduct]);

    // seçilen büyüklüğe göre veya türe göre para değişimi
    const selectedVariant = selectedProduct?.variants.find(variant => {
        return Object.entries(stockOptions || {}).every(([key, value]) => variant[key] === value)
    })
    console.log(selectedVariant)
    const selectedTree = selectedProduct?.images[selectedVariant?.tree || ""] || [];
    //add-cart 
    const addCart = () => {
        if (!selectedProduct || !selectedVariant) return;

        dispatch(addToCart({
            id: selectedProduct.id,
            name: selectedProduct.name,
            brand: selectedProduct.brand,
            image: selectedProduct.image,
            discountRate: selectedProduct.discountRate,
            variant: selectedVariant
        }))
        setMiniCart(true)

        setTimeout(() => {
            setMiniCart(false)
        }, 1500);
    }

    //add-favorite 
    useEffect(() => {
        if(!selectedProduct) return;
        
        const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
        const isFav = stored.includes(selectedProduct.id);
        setIsFavorite(isFav);
    }, [selectedProduct?.id]);

    const handleFav = (id: string) => {
        const favs = JSON.parse(localStorage.getItem("favorites") || "[]");

        let updatedFavs;
        if (favs.includes(id)) {
            updatedFavs = favs.filter((favId: string) => favId !== id);
        } else {
            updatedFavs = [...favs, id];
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
        setIsFavorite(updatedFavs.includes(id))
    };

    return (
        <>
        <div className="details">
            <DetailBreadcrumb name={selectedProduct?.name} />
            <div className="details-body">
                <DetailGallery selectedTree={selectedTree.length > 0 ? selectedTree : []}/>
                <div className="detail-box">
                    <h1 className="name">{selectedProduct?.name}</h1>             
                    <div className="price">₺{selectedVariant?.price}</div>
                    <OptionSelector optionValues={selectedProduct?.optionValues} stockOptions={stockOptions} setStockOptions={setStockOptions}/>
                    <TrustBadges />
                    <div className="buttons">
                        <button type='button' className="button-add" onClick={addCart}>Sepete Ekle</button>
                    </div>
                    <Collapsibles infoSection={selectedProduct?.infoSections || []}/>
                    {
                        selectedProduct && (
                            <div className={`favorite ${isFavorite ? "show" : ""}`} onClick={() => handleFav(selectedProduct.id)}>
                                {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
                            </div>
                        )
                    }
                </div>
            </div>
            <DetailComments selectedProduct={selectedProduct} setSelectedProducts={setSelectedProduct}/>
        </div>
        <ProductAddedCart selectedProduct={selectedProduct} miniCart={miniCart} stockOptions={stockOptions} price={selectedVariant?.price}/> {/* spete eklennince çıkan mini kart */}
        </>
        
    )
}

export default Details