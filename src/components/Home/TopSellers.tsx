import { Swiper, SwiperSlide } from 'swiper/react';
import "./TopSellers.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const productImages = [
  {
    name: "Turuncu Modern Koltuk",
    path: "/top-sellers/image-1.jpg",
    price: 149.99,
    brand: "Porgeon"
  },
  {
    name: "Doğal Ahşap Masa",
    path: "/top-sellers/image-1.jpg",
    price: 129.99,
    brand: "Porgeon"
  },
  {
    name: "Odun Kartal Figürü",
    path: "/top-sellers/image-1.jpg",
    price: 99.99,
    brand: "Porgeon"
  },
  {
    name: "Ahşap Çekmece",
    path: "/top-sellers/image-1.jpg",
    price: 119.99,
    brand: "Porgeon"
  },
  {
    name: "Turuncu Modern Koltuk",
    path: "/top-sellers/image-1.jpg",
    price: 149.99,
    brand: "Porgeon"
  },
  {
    name: "Doğal Ahşap Masa",
    path: "/top-sellers/image-1.jpg",
    price: 129.99,
    brand: "Porgeon"
  },
  {
    name: "Odun Kartal Figürü",
    path: "/top-sellers/image-1.jpg",
    price: 99.99,
    brand: "Porgeon"
  },
  {
    name: "Ahşap Çekmece",
    path: "/top-sellers/image-1.jpg",
    price: 119.99,
    brand: "Porgeon"
  },
];


const TopSellers = () => {
  return (
    <div className="top-sellers">
        <h2>En Çok Satanlar</h2>
        <div>
            <Swiper
            modules={[Navigation]}
            slidesPerView={4}
            slidesPerGroup={2}
            loop
            navigation
            speed={800}
            breakpoints={{
                0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 0, 
                },
                768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15,
                },
                992: {
                slidesPerView: 4,
                slidesPerGroup: 2,
                spaceBetween: 20,
                },
            }}
            >
                {
                    productImages.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Link to={'/'}>
                                <div className="product-image">
                                    <img src={product.path} alt={product.name} loading='lazy'/>
                                </div>
                                <div className="product-body">
                                    <div className="brand">{product.brand}</div>
                                    <div className='name'>{product.name}</div>
                                    <div className='price'>₺{product.price}</div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default TopSellers