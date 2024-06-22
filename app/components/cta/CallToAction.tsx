import Button from "@/app/components/general/button/Button";
import CTAdditionalContainer from "@/app/components/cta/CTAdditionalContainer";

import './styles/cta.scss';

function CallToAction({heading, text, buttonUrl, buttonText, ctaContainerLeft, ctaContainerRight}: Readonly<{
    ctaContainerLeft: ComponentCtaAdditionalContainerInterface;
    ctaContainerRight: ComponentCtaAdditionalContainerInterface;
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

                <Button url={buttonUrl} text={buttonText} buttonStyle={'filling'} size={'long'} icon={'→'} />
            </div>

            <CTAdditionalContainer {...ctaContainerRight} />
        </div>
    );
}

export default CallToAction;