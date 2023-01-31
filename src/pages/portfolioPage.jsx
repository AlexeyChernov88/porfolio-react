import React, { useState, useEffect } from "react";
import Contacts from "../components/contacts";
import CV from "../components/CV";
import Offer from "../components/offer";
import Works from "../components/works";

const PortfolioPage = () => {
    const [isShowPopap, setIsShowPopap] = useState(false);

    const openPopap = () => {
        setIsShowPopap(true);
    };

    const closePopap = () => {
        setIsShowPopap(false);
    };

    const checkOuterClick = (e) => {
        if (isShowPopap && !e.target.closest(".popap__inner")) {
            closePopap();
        }
    };
    const scrollY = window.pageYOffset;
    useEffect(() => {
        const handleScroll = () => {
            const doc = document.documentElement;
            const scroll = window.pageYOffset;
            const height = doc.clientHeight;
            if (scroll < height * 0.3) {
                doc.style.backgroundColor = "#3a3e3e";
            } else if (scroll >= height * 0.3 && scroll < height * 0.5) {
                doc.style.backgroundColor = "#4E4E96";
            } else if (scroll >= height * 0.5 && scroll < height * 0.9) {
                doc.style.backgroundColor = "#378aba";
            } else {
                doc.style.backgroundColor = "#ec4e2d";
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);
    useEffect(() => {
        const doc = document.documentElement;
        doc.style.backgroundColor = "#3a3e3e";
    }, []);
    return (
        <div className="outer" onClick={checkOuterClick}>
            <div className="container">
                <Offer openPopap={openPopap} isShowPopap={isShowPopap} />
                <Contacts />
                <CV />
                <Works />
                <Contacts />
                <h2 className="ps">Спасибо за просмотр!</h2>
            </div>
        </div>
    );
};

export default PortfolioPage;
