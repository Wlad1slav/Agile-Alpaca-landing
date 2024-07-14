'use client'

import {useEffect, useCallback, useState} from "react";


/**
 * HeaderSwitcher component manages the display of a fixed header based on scroll position.
 *
 * @param {Object} props - The component props.
 * @param {JSX.Element} props.fixedHeader - The fixed header component to be displayed.
 * @return {JSX.Element} The HeaderSwitcher component.
 */
function HeaderSwitcher({fixedHeader}: {
    fixedHeader: JSX.Element;
}) {
    /**
     * Flag to indicate whether to show the fixed header.
     * @type {boolean}
     */
    const [showFixedHeader, setShowFixedHeader] = useState(false);

    /**
     * Handles the scroll event to show/hide the fixed header based on scroll position.
     * @return {void}
     */
    const handleScroll = useCallback(() => {
        // Show the fixed header if the scroll position is greater than 100 pixels
        setShowFixedHeader(window.scrollY > 100);
    }, []);

    // Add event listener to handle scroll event
    useEffect(() => {
        // Add scroll event listener to window
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when component unmounts to prevent memory leaks
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            {/* Render the fixed header if the showFixedHeader flag is true */}
            { showFixedHeader && fixedHeader }
        </>
    );
}

export default HeaderSwitcher;