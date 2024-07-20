'use client';

import {useParams} from "next/navigation";
import './styles/navbutton.scss';

function NavButton({href, text, fill='outline', title=''}: Readonly<{
    href: string, 
    text: string, 
    fill?: 'outline' | 'filling' | 'not-noticeable',
    title?: string
}>) {

    const {lang} = useParams();

    return (
        <a href={`/${lang}/${href}`} title={title} className={`nav--button ${fill}`}>
            {text}
        </a>
    );
}

export default NavButton;