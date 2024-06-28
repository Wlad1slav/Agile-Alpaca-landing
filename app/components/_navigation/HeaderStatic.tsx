import NavBar from "@/app/components/_navigation/NavBar";
import NavLink from "@/app/components/_navigation/NavLink";
import NavButton from "@/app/components/_navigation/NavButton";
import Logo from "@/app/components/_general/Logo";
import ThemeToggle from "@/app/components/_general/theme-toggle/ThemeToggle";

import './styles/header.scss';
import navigationLinks from "@/app/config/navigation.config";

import "@theme-toggles/react/css/Classic.css"

function HeaderStatic(): JSX.Element {

    return (
        <header>
            <Logo />
            <NavBar>
                {
                    navigationLinks.map((value) => {
                        return <NavLink key={value.href} {...value} />
                    })
                }
            </NavBar>
            <div className="buttons">
                <NavButton href='#' fill={'not-noticeable'} text='Contact us' />
                <NavButton href='#getStarted' fill={'outline'} text='Get started' />
                <ThemeToggle />
            </div>
        </header>
    );
}

export default HeaderStatic;