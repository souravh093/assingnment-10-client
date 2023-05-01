import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import "../index.css"

const Root = () => {
    return (
        <div className='root'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;