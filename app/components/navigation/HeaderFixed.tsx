import Logo from "@/app/components/navigation/Logo";
import NavBar from "@/app/components/navigation/NavBar";
import NavLink from "@/app/components/navigation/NavLink";
import NavButton from "@/app/components/navigation/NavButton";

import './styles/fixed-header.scss';
import navigationLinks from "@/app/config/navigation.config";


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
            <div className="buttons">
                <NavButton href='#getStarted' fill={'outline'} text='Get started' />
            </div>
        </div>
    );
}

export default HeaderFixed;