import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CardContextProvider from './context/CardContextProvider'
function Layout() {
    return (
        <CardContextProvider>
            <Header />
            <Outlet />
            <Footer />
        </CardContextProvider>
    )
}

export default Layout
