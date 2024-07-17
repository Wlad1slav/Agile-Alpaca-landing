'use client';

import {useParams} from "next/navigation";
import './styles/navbutton.scss';

function NavButton({href, text, fill='outline'}: Readonly<{
    href: string, text: string, fill?: 'outline' | 'filling' | 'not-noticeable'
}>) {

    const {lang} = useParams();

    return (
        <a href={`/${lang}/${href}`} className={`nav--button ${fill}`}>
            {text}
        </a>
    );
}

export default NavButton;