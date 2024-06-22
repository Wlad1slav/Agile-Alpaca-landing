import NavBar from "@/app/components/navigation/NavBar";
import NavLink from "@/app/components/navigation/NavLink";
import NavButton from "@/app/components/navigation/NavButton";
import Logo from "@/app/components/navigation/Logo";

import './styles/header.scss';
import navigationLinks from "@/app/config/navigation.config";

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
            </div>
        </header>
    );
}

export default HeaderStatic;