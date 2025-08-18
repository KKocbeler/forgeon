import CategoryBanners from "../components/Home/CategoryBanners"
import MainSwiper from "../components/Home/MainSwiper"
import TopSellers from "../components/Home/TopSellers"

const Home = () => {
  return (
    <>
        <MainSwiper />
        <TopSellers />
        <CategoryBanners />
    </>
  )
}

export default Home