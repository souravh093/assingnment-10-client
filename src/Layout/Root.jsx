import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import "../index.css"
import { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader';

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className='root'>
            <Header />
            <div>{navigation.state === 'loading' && <Loader />}</div>
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;