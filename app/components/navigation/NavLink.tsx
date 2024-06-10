function NavLink({href, text}: Readonly<{href: string, text: string}>) {
    return (
        <a href={href}>
            {text}
        </a>
    );
}

export default NavLink;