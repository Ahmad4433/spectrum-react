import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import style from './layout.module.css'
import {useSelector} from 'react-redux'
import Loading from '../ui/loading/Loading'

const Layout = () => {

const isLoading = useSelector(state=>state.ui.loading)


  return (
    <div className={style.main} >
      {isLoading && <Loading/>}
      <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
