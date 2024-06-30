import './styles/navbutton.scss';

function NavButton({href, text, fill='outline'}: Readonly<{
    href: string, text: string, fill?: 'outline' | 'filling' | 'not-noticeable'
}>) {
    return (
        <a href={href} className={`nav--button ${fill}`}>
            {text}
        </a>
    );
}

export default NavButton;