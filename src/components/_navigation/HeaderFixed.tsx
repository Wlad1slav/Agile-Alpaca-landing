import Logo from "@/components/_general/Logo";
import NavBar from "@/components/_navigation/NavBar";
import NavLink from "@/components/_navigation/NavLink";
import NavButton from "@/components/_navigation/NavButton";

import './styles/fixed-header.scss';
import navigationLinks from "@/config/navigation.config";
import ThemeToggle from "@/components/_general/theme-toggle/ThemeToggle";


function HeaderFixed() {
    return (
        <div className="fixed">
            <Logo withName={false} />
            <NavBar>
                {
                    navigationLinks.map((value) => {
                        return <NavLink key={value.href} {...value} />
                    })
                }
            </NavBar>
            <ThemeToggle />
            <div className="buttons">
                <NavButton href='#getStarted' fill={'outline'} text='Get started' />
            </div>
        </div>
    );
}

export default HeaderFixed;