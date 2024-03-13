import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import style from './layout.module.css'
const Layout = () => {
  return (
    <div className={style.main} >
      <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
