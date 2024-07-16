import ButtonLink from "@/components/_general/button/ButtonLink";

import './styles/cta-additional-container.scss';

function CTAdditionalContainer({rotate, buttonUrl, list, subtext, headIcon, headHeading, cta}: Readonly<CtaAdditionalContainerProps>) {
    const classes = [
        'cta--additional-container',
        rotate
    ];
    return (
        <div className={classes.join(' ')}>
            <div className="head">
                {headIcon}
                <h3>{headHeading}</h3>
            </div>
            <p>{subtext}</p>

            <ul>
                {
                    list.map((value) =>{
                        return <li key={value}>{value}</li>
                    })
                }
            </ul>
            
            <ButtonLink url={buttonUrl} text={cta} buttonStyle={'filling'} />
        </div>
    );
}

export default CTAdditionalContainer;