'use client'

import { useEffect, useState } from "react";
import { Classic } from "@theme-toggles/react";

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }, []);

    function toggleTheme(): void {
        const body = document.body;
        const newTheme = isDark ? 'light' : 'dark';

        body.classList.toggle('dark-theme', !isDark);
        localStorage.setItem('theme', newTheme);
        setIsDark(!isDark);
    }

    return (
        <Classic
            duration={750}
            onToggle={toggleTheme}
            toggled={isDark}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
        />
    );
}

export default ThemeToggle;
