import ButtonLink from "@/components/_general/button/ButtonLink";
import CTAdditionalContainer from "@/components/_blocks/CTA/CTAdditionalContainer";

import './styles/cta.block.scss';

function CallToActionBlock({heading, text, buttonUrl, buttonText, ctaContainerLeft, ctaContainerRight}: Readonly<{
    ctaContainerLeft: CtaAdditionalContainerProps;
    ctaContainerRight: CtaAdditionalContainerProps;
    heading: string;
    text: string;
    buttonUrl: string;
    buttonText: string;
}>) {
    return (
        <div className="cta">
            <CTAdditionalContainer {...ctaContainerLeft} />

            <div className='cta--center-content'>
                <h2>{heading}</h2>
                <p>{text}</p>

                <ButtonLink url={buttonUrl} text={buttonText} buttonStyle={'filling'} size={'long'} icon={'→'} />
            </div>

            <CTAdditionalContainer {...ctaContainerRight} />
        </div>
    );
}

export default CallToActionBlock;