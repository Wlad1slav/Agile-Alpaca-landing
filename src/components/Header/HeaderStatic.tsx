import NavBar from "@/components/Header/NavBar";
import NavLink from "@/components/Header/NavLink";
import Logo from "@/components/_general/Logo";
import ThemeToggle from "@/components/_general/theme-toggle/ThemeToggle";

import './styles/header.scss';

function HeaderStatic({navigation, buttons}: HeaderProps): JSX.Element {

    return (
        <header>
            <Logo />
            <NavBar>
                {
                    navigation.map((value, index) => {
                        return <NavLink key={`${value.href}_${index}}`} {...value} />
                    })
                }
            </NavBar>
            <div className="buttons">
                {
                    buttons?.map((value) => {
                        return value;
                    })
                }
                <ThemeToggle />
            </div>
        </header>
    );
}

export default HeaderStatic;