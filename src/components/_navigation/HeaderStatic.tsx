import NavBar from "@/components/_navigation/NavBar";
import NavLink from "@/components/_navigation/NavLink";
import NavButton from "@/components/_navigation/NavButton";
import Logo from "@/components/_general/Logo";
import ThemeToggle from "@/components/_general/theme-toggle/ThemeToggle";

import './styles/header.scss';
import navigationLinks from "@/config/navigation.config";

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