import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import ScrollToTop from "./components/Pieces/ScrollToTop"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AboutUs from "./pages/AboutUs"
import Payment from "./pages/Payment"
import Faq from "./components/HelperPages/Faq/Faq"
import Return from "./pages/Return"
import MyCart from "./pages/MyCart"
import Profile from "./pages/Profile"
import ProfileOrders from "./components/Profile/ProfilePage/ProfileOrder/ProfileOrders"
import ProfileAddresses from "./components/Profile/ProfilePage/ProfileAddresses"
import ProfileInfo from "./components/Profile/ProfilePage/ProfileInfo"
import ProfileFavorites from "./components/Profile/ProfilePage/ProfileFavorites"
import Contact from "./pages/Contact"
import NotFound from "./components/Pieces/NotFound"
import TermsPrivacy from "./components/HelperPages/Terms-Privacy/TermsPrivacy"

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/:name" element={<ProductDetails />} />
                            <Route path="/account" element={<Navigate to="/account/login" />} />
                            <Route path="/account/login" element={<Login />} />
                            <Route path="/account/register" element={<Register />} />
                            <Route path="/profile" element={<Profile />}>
                                <Route index element={< ProfileInfo />} />
                                <Route path="addresses" element={<ProfileAddresses />} />
                                <Route path="orders" element={<ProfileOrders />} />
                                <Route path="favorites" element={<ProfileFavorites />} />
                            </Route>
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/returns-and-exchanges" element={<Return />} />
                            <Route path="/my-cart" element={<MyCart />} />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/terms-and-privacy" element={<TermsPrivacy />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
            </Router>
        </>
    )
}

export default App
