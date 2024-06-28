'use client'

import { useEffect, useState } from "react";

import Icon from "@/components/_general/icon/Icon";

import './styles/theme-toggle.scss';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }, []);

    function switchTheme(): void {
        const body = document.body;
        const newTheme = isDark ? 'light' : 'dark';

        body.classList.toggle('dark-theme', !isDark);
        localStorage.setItem('theme', newTheme);
        setIsDark(!isDark);
    }

    function toggleTheme(): void {
        // @ts-ignore
        if (!document.startViewTransition) {
            switchTheme();
            return;
        }
        // @ts-ignore
        document.startViewTransition(switchTheme);
    }

    return (
        <div className='thm-toggle' onClick={toggleTheme}>
            { isDark ? <Icon.night /> : <Icon.day /> }
        </div>
    );
}

export default ThemeToggle;
