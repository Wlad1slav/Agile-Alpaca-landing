'use client'

import {useEffect, useCallback, useState} from "react";

import HeaderStatic from "@/components/_navigation/HeaderStatic";
import HeaderFixed from "@/components/_navigation/HeaderFixed";

function Header() {
    const [showFixedHeader, setShowFixedHeader] = useState(false);

    const handleScroll = useCallback(() => {
        setShowFixedHeader(window.scrollY > 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <HeaderStatic />
            { showFixedHeader && <HeaderFixed /> }
        </>
    );
}

export default Header;