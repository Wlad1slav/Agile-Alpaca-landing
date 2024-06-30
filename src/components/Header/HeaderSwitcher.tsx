'use client'

import {useEffect, useCallback, useState} from "react";

function HeaderSwitcher({staticHeader, fixedHeader}: {
    staticHeader: JSX.Element;
    fixedHeader: JSX.Element;
}) {
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
            {staticHeader}
            { showFixedHeader && fixedHeader }
        </>
    );
}

export default HeaderSwitcher;