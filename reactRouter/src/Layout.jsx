import React from 'react';
import { Home, About, Contact, User, Header, Footer } from './Components/index';
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
