import Logo from "@/components/_general/Logo";
import ThemeToggle from "@/components/_general/theme-toggle/ThemeToggle";
import NavBar from "@/components/Header/NavBar";
import NavLink from "@/components/Header/NavLink";

import './styles/fixed-header.scss';

function HeaderFixed({navigation, buttons}: HeaderProps) {
    return (
        <div className="fixed">
            <Logo withName={false} />
            <NavBar>
                {
                    navigation?.map((value) => {
                        return <NavLink key={value.href} {...value} />
                    })
                }
            </NavBar>
            <ThemeToggle />
            <div className="buttons">
                {
                    buttons?.map((value) => {
                        return value;
                    })
                }
            </div>
        </div>
    );
}

export default HeaderFixed;