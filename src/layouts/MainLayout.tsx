import {  useEffect } from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet } from "react-router-dom";

import '../assets/scss/style.module.scss';

const MainLayout = () => {

    useEffect(() => {
        if (document.body) {
            const body = document.body;
            body.scrollTo(1000, 1000);
        }
    }, []);

    return (
        <>
            <Header />

			<Outlet />

            <Footer />
        </>
    );
};

export default MainLayout;
