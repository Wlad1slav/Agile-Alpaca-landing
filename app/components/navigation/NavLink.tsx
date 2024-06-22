function NavLink({href, text}: Readonly<ComponentNavLinkInterface>) {
    return (
        <a href={href}>
            {text}
        </a>
    );
}

export default NavLink;