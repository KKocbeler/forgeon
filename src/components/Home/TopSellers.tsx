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
    path: "/detail/detail-3.webp",
    price: 149.99,
    brand: "Porgeon"
  },
  {
    name: "Doğal Ahşap Masa",
    path: "/detail/detail-3.webp",
    price: 129.99,
    brand: "Porgeon"
  },
  {
    name: "Odun Kartal Figürü",
    path: "/detail/detail-3.webp",
    price: 99.99,
    brand: "Porgeon"
  },
  {
    name: "Ahşap Çekmece",
    path: "/detail/detail-3.webp",
    price: 119.99,
    brand: "Porgeon"
  },
  {
    name: "Turuncu Modern Koltuk",
    path: "/detail/detail-3.webp",
    price: 149.99,
    brand: "Porgeon"
  },
  {
    name: "Doğal Ahşap Masa",
    path: "/detail/detail-3.webp",
    price: 129.99,
    brand: "Porgeon"
  },
  {
    name: "Odun Kartal Figürü",
    path: "/detail/detail-3.webp",
    price: 99.99,
    brand: "Porgeon"
  },
  {
    name: "Ahşap Çekmece",
    path: "/detail/detail-3.webp",
    price: 119.99,
    brand: "Porgeon"
  },
];


const TopSellers = () => {
  return (
    <section className="top-sellers">
        <h2>En Çok Satanlar</h2>
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
                        <article>
                          <Link to={'/'}>
                              <div className="product-image">
                                  <img src={product.path} alt={product.name} loading='lazy'/>
                              </div>
                              <div className="product-body">
                                  <p className="brand">{product.brand}</p>
                                  <h3 className='name'>{product.name}</h3>
                                  <div className='price'>
                                      <span>₺{product.price}</span>
                                  </div>
                              </div>
                          </Link>
                        </article>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default TopSellers