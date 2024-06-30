import HeaderSwitcher from "@/components/Header/HeaderSwitcher";
import {useTranslations} from "next-intl";
import navigationLinks from "@/config/navigation.config";
import HeaderStatic from "@/components/Header/HeaderStatic";
import HeaderFixed from "@/components/Header/HeaderFixed";
import NavButton from "@/components/Header/NavButton";
import {unstable_setRequestLocale} from "next-intl/server";

function Header() {

    unstable_setRequestLocale('en');
    const localisationHeader = useTranslations('Header');
    const navigation = navigationLinks(localisationHeader);

    const getStartedButtonElement: JSX.Element = <NavButton
        key='btn-h-gs'
        href='#getStarted'
        fill={'outline'}
        text={localisationHeader('cta.default')}
    />;

    const contactButtonElement: JSX.Element = <NavButton
        key='btn-h-contact'
        href='#'
        fill={'not-noticeable'}
        text={localisationHeader('cta.contact')}
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
                            text={localisationHeader('cta.default')}
                        />
                    ]}
                />}
            />
        </>
    );
}

export default Header;