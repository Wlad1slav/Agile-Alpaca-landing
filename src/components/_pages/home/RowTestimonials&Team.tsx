import Column from "@/components/_general/positioning/Column";
import TestimonialsBlock from "@/components/_blocks/Testimonials/TestimonialsBlock";
import testimonials from "@/content/blocks/Testimonials.block-content";
import Heading from "@/components/_general/heading/Heading";
import TeamBlock from "@/components/_blocks/Team/TeamBlock";
import {teamBlockContent} from "@/content/blocks/Team.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import {useTranslations} from "next-intl";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";
import {unstable_setRequestLocale} from "next-intl/server";

function HomePageRowTestimonialsAndTeam() {
    unstable_setRequestLocale('en');
    const localisationTestimonials = useTranslations('BlockTestimonials');
    const localisationTeam = useTranslations('BlockTeam');

    return (
        <Row margin={{bottom: 'medium'}}>
            <Column id='testimonials' margin={{bottom: 'large'}} mobilePaddingMustHave={true}>
                <TestimonialsBlock
                    heading={localisationTestimonials('heading')}
                    text={localisationTestimonials('text')}
                    testimonials={testimonials(localisationTestimonials)}
                />
            </Column>

            <Column id='ourTeam' margin={{bottom: 'large'}}>
                <Heading.h2 marginBottom={'medium'} subtext={localisationTeam('heading.subheading')}>
                    {parse(stringFormat(localisationTeam('heading.text')))}
                </Heading.h2>
                <TeamBlock team={teamBlockContent(localisationTeam)}/>
            </Column>
        </Row>
    )
}

export default HomePageRowTestimonialsAndTeam;