import CaseStudy from "@/app/components/caseStudy/caseStudy";

import './case-studies.scss';

function CaseStudiesModule({caseStudies}: Readonly<{
    caseStudies: Array<ComponentCaseStudiesInterface>
}>) {
    return (
        <div className="case-studies">
            {
                caseStudies.map((value, index) => {
                    const num = index + 1;
                    let translateY;

                    if (num % 3 === 1) { translateY = '50%'; }
                    else if (num % 3 == 2) { translateY = '25%'; }
                    else { translateY = '0%'; }

                    return <CaseStudy
                        translateY={translateY}
                        title={value.title}
                        text={value.text}
                        subtitle={value.subtitle}
                        imageLink={value.imageLink}
                        imageAlt={value.imageAlt}
                        pageLink={value.pageLink}
                    />
                })
            }
        </div>
    )
}

export default CaseStudiesModule;