'use client'

import { useState, useEffect } from "react";

import './styles/navlink.scss';

function NavLink({ href, text, isPageSection = true }: Readonly<NavLinkProps>) {
    const [isObserve, setIsObserve] = useState(false);

    useEffect(() => {
        const relatedContainer = document.getElementById(href);

        if (relatedContainer) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    setIsObserve(entry.isIntersecting);
                });
            }, { threshold: 0.25 });

            observer.observe(relatedContainer);

            return () => observer.disconnect();
        }
    }, [href]);

    return (
        <a href={(isPageSection ? '#' : '') + href} className={isObserve ? 'observe' : ''}>
            {text}
        </a>
    );
}

export default NavLink;
