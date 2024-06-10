import NavBar from "@/app/components/navigation/NavBar";
import NavLink from "@/app/components/navigation/NavLink";
import NavButton from "@/app/components/navigation/NavButton";
import Logo from "@/app/components/navigation/Logo";

import './styles/header.scss';

function Header(): JSX.Element {
    return (
        <header>
            <Logo />
            <NavBar>
                <NavLink href='#' text='Solutions' />
                <NavLink href='#' text='Case studies' />
                <NavLink href='#' text='Price' />
            </NavBar>
            <div className="buttons">
                <NavButton href='#' fill={'not-noticeable'} text='Contact us' />
                <NavButton href='#' fill={'outline'} text='Get started' />
            </div>
        </header>
    );
}

export default Header;