import React from "react";

import NavBar from "@/components/Header/NavBar";
import NavLink from "@/components/Header/NavLink";
import Logo from "@/components/_general/Logo";
import ThemeToggle from "@/components/_general/theme-toggle/ThemeToggle";
import Select from "@/components/_general/select/Select";

import './styles/header.scss';
import {global} from "@/config/site.config";

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
                <div className="buttons--block">
                    {
                        buttons?.map((value) => {
                            return value;
                        })
                    }
                </div>
                <div className="buttons--block">
                    <Select languages={global.internationalisation.languagesSelect} />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default HeaderStatic;