import HeaderSwitcher from "@/components/Header/HeaderSwitcher";
import navigationLinks from "@/config/navigation.config";
import HeaderStatic from "@/components/Header/HeaderStatic";
import HeaderFixed from "@/components/Header/HeaderFixed";
import NavButton from "@/components/Header/NavButton";

function Header({localHeader, localNavigation}: {
    localHeader: { [key: string]: any };
    localNavigation: { [key: string]: any };
}) {

    const navigation = navigationLinks(localNavigation);

    const getStartedButtonElement: JSX.Element = <NavButton
        key='btn-h-gs'
        href='#getStarted'
        fill={'outline'}
        text={localHeader['cta']['default']}
    />;

    const contactButtonElement: JSX.Element = <NavButton
        key='btn-h-contact'
        href='#'
        fill={'not-noticeable'}
        text={localHeader['cta']['contact']}
    />;

    return (
        <>
            <HeaderSwitcher
                staticHeader={<HeaderStatic
                    navigation={navigation}
                    buttons={[contactButtonElement, getStartedButtonElement]}
                />}

                fixedHeader={<HeaderFixed
                    navigation={navigation}
                    buttons={[
                        <NavButton
                            key='btn-h-gs'
                            href='#getStarted'
                            fill={'not-noticeable'}
                            text={localHeader['cta']['default']}
                        />
                    ]}
                />}
            />
        </>
    );
}

export default Header;