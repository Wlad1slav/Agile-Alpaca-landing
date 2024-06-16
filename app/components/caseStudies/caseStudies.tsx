import CaseStudy from "@/app/components/caseStudies/caseStudy";

import caseStudies from "@/app/config/caseStudies.config";

import './styles/case-studies.scss';

function CaseStudies() {
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

export default CaseStudies;