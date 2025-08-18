import "./DetailGallery.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { MdArrowBack, MdArrowDownward, MdArrowForward, MdArrowUpward } from "react-icons/md";

interface PropsType {
    images: string[]
}

const DetailGallery = ({images}: PropsType) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener("resize", handleResize)

        return() => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    const handleMinusIndex = () => {
        setSelectedImage(prev => {
            if(prev >= 1) {
                return prev - 1
            } else {
                return images.length - 1
            }
        })
    }
    const handlePlusIndex = () => {
        setSelectedImage(prev => {
            if(prev < images.length - 1) {
                return prev + 1
            } else {
                return 0
            }
        })
    }
    return (
        <div className="detail-wrapper">
            <div className="small-slider">
                <div className="direction" onClick={handleMinusIndex}>{ isMobile ? <MdArrowBack /> : <MdArrowUpward />}</div>
                <Swiper
                direction={isMobile ? "horizontal" : "vertical"}
                slidesPerView={isMobile ? 5 : 6}
                spaceBetween={isMobile ? 70 : 20}
                draggable
                >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={img}
                            onClick={() => setSelectedImage(index)}
                            className={`thumb ${selectedImage === index ? 'active' : ''}`}
                        />
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className="direction" onClick={handlePlusIndex}>{ isMobile ? <MdArrowForward /> : <MdArrowDownward />}</div>
            </div>
            <div className="big-slider">
                <img src={images[selectedImage]} alt="Büyük Görsel" />
            </div>
        </div>
    )
}

export default DetailGallery