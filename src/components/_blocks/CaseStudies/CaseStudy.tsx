import './styles/case-study.scss';

function CaseStudy({translateY, title, subtitle, text, pageLink, imageLink}: Readonly<{
    translateY: string;
    title: string;
    subtitle?: string;
    text: string;
    pageLink: string;
    imageLink: string;
}>) {
    return (
        <a
            href={pageLink}
            className="case-studies--container"
            style={{
                transform: `translateY(${translateY})`
            }}
        >
            <div className="head">
                <img src={imageLink} alt={`${title} logo`} loading='lazy' />
                <h3>{title}</h3>
                <p className="subtitle">{subtitle}</p>
            </div>
            <p>{text}</p>
        </a>
    );
}

export default CaseStudy;