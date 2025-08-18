import { Swiper, SwiperSlide} from "swiper/react";
import "./MainSwiper.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const swiperImages = [
    {name: "resim1", path:"/main-swiper/main-swiper-1.webp"},
    {name: "resim2", path:"/main-swiper/main-swiper-2.webp"},
    {name: "resim3", path:"/main-swiper/main-swiper-3.webp"},
    {name: "resim4", path:"/main-swiper/deneme.jpg"}
]

const MainSwiper = () => {
  return (
    <div className="main-swiper">
        <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={200}
            slidesPerGroup={1}
            autoplay={{ delay: 3000 }}
            navigation={ true }
            loop= {true}
            speed={800}
        >
            {
                swiperImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Link to={'/'}>
                            <img src={image.path} alt={image.name}/>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default MainSwiper