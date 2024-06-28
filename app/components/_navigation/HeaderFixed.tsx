import Logo from "@/app/components/_general/Logo";
import NavBar from "@/app/components/_navigation/NavBar";
import NavLink from "@/app/components/_navigation/NavLink";
import NavButton from "@/app/components/_navigation/NavButton";

import './styles/fixed-header.scss';
import navigationLinks from "@/app/config/navigation.config";
import ThemeToggle from "@/app/components/_general/theme-toggle/ThemeToggle";


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