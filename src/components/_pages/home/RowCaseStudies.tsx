import Column from "@/components/_general/positioning/Column";
import Heading from "@/components/_general/heading/Heading";
import CaseStudiesBlock from "@/components/_blocks/CaseStudies/CaseStudiesBlock";
import caseStudies from "@/content/blocks/CaseStudies.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";

function HomePageRowCaseStudies({localCaseStudies}: {
    localCaseStudies: { [key: string]: any }
}) {
    return (
        <Row style={{
            paddingInline: "15%",
        }} id={'caseStudies'}>
            <Column style={{position: "relative"}}>
                <Heading.h2
                    subtext={localCaseStudies['heading']['subtext']}
                    marginBottom={'medium'}
                    isAbsolute={true}
                    position={{left: "1%"}}
                    textAlign={'left'}
                >
                    {parse(stringFormat(localCaseStudies['heading']['text']))}
                </Heading.h2>

                <CaseStudiesBlock caseStudies={caseStudies(localCaseStudies['caseStudies'] )}/>
            </Column>
        </Row>
    );
}

export default HomePageRowCaseStudies;