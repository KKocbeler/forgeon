import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/app/store"
import WhatsappButton from "../components/Pieces/WhatsappButton"

const MainLayout = () => {
  const cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <>
        
        <div className="container">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
        <WhatsappButton />
    </>
  )
}

export default MainLayout