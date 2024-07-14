import HeaderStatic from "@/components/Header/HeaderStatic";
import NavButton from "@/components/Header/NavButton";

/**
 * Header component that renders the header of the website.
 *
 * @param {Object} props - The props object containing the localized header data.
 * @param {Object} props.localHeader - The localized header data.
 * @param {Object} props.localHeader.cta - The localized header CTAs.
 * @param {string} props.localHeader.cta.default - The localized default get started button text.
 * @param {string} props.localHeader.cta.contact - The localized contact button text.
 * @return {JSX.Element} The rendered header component.
 */
function Header({localHeader}: {
    localHeader: { [key: string]: any };
}) {

    // Create the get started button element.
    const getStartedButtonElement: JSX.Element = <NavButton
        key='btn-h-gs'
        href='#getStarted'
        fill={'outline'}
        text={localHeader['cta']['default']}
    />;

    // Create the contact button element.
    const contactButtonElement: JSX.Element = <NavButton
        key='btn-h-contact'
        href='#'
        fill={'not-noticeable'}
        text={localHeader['cta']['contact']}
    />;

    // Render the header component with the created buttons.
    return (
        <HeaderStatic buttons={[contactButtonElement, getStartedButtonElement]} />
    );
}

export default Header;