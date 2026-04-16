import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TimelineProvider } from '../context/TimelineContext';

const MainLayout = () => {
    return (
        <TimelineProvider>
            <div>
                <Navbar/>
                <Outlet/>
                <Footer/>
                <ToastContainer />
            </div>
        </TimelineProvider>
    );
};

export default MainLayout;<Navbar/>