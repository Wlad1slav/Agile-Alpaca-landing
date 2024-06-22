import './styles/cta-additional-container.scss';
import Button from "@/app/components/general/button/Button";

function CTAdditionalContainer({rotate, buttonUrl, list, subtext, headIcon, headHeading}: Readonly<ComponentCtaAdditionalContainerInterface>) {
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