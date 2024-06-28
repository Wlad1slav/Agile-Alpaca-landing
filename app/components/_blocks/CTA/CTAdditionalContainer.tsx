import Button from "@/app/components/_general/button/Button";

import './styles/cta-additional-container.scss';

function CTAdditionalContainer({rotate, buttonUrl, list, subtext, headIcon, headHeading}: Readonly<CtaAdditionalContainerProps>) {
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
            
            <Button url={buttonUrl} text={'Learn more'} buttonStyle={'filling'} />
        </div>
    );
}

export default CTAdditionalContainer;