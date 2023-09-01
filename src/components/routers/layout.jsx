import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../hader/navBar'
import CarouselUp from '../hader/carouselUp'
import Logo from '../hader/logo'
import Footer from '../footer/footer'
import ModleCart from '../pages/categories/modleCart'
import ProductInfo from '../pages/categories/productInfo'


const Layout = () => {
  return (
    <div>
      <CarouselUp/>
      <Logo/>
   <NavBar/>
   <ModleCart/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Layout