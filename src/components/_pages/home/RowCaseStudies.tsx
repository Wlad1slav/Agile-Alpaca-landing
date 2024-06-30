import Column from "@/components/_general/positioning/Column";
import Heading from "@/components/_general/heading/Heading";
import CaseStudiesBlock from "@/components/_blocks/CaseStudies/CaseStudiesBlock";
import caseStudies from "@/content/blocks/CaseStudies.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import {useTranslations} from "next-intl";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";

function HomePageRowCaseStudies() {
    const localisationCaseStudies = useTranslations('BlockCaseStudies');

        return (
            <Row style={{
                paddingInline: "15%",
            }} id={'caseStudies'}>
                <Column style={{position: "relative"}}>
                    <Heading.h2
                        subtext={localisationCaseStudies('heading.subtext')}
                        marginBottom={'medium'}
                        isAbsolute={true}
                        position={{ left: "1%" }}
                        textAlign={'left'}
                    >
                        {parse(stringFormat(localisationCaseStudies('heading.text')))}
                    </Heading.h2>

                    <CaseStudiesBlock caseStudies={caseStudies(localisationCaseStudies)} />
                </Column>
            </Row>
        );
}

export default HomePageRowCaseStudies;