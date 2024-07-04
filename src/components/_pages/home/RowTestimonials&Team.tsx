import Column from "@/components/_general/positioning/Column";
import TestimonialsBlock from "@/components/_blocks/Testimonials/TestimonialsBlock";
import testimonials from "@/content/blocks/Testimonials.block-content";
import Heading from "@/components/_general/heading/Heading";
import TeamBlock from "@/components/_blocks/Team/TeamBlock";
import {teamBlockContent} from "@/content/blocks/Team.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";

function HomePageRowTestimonialsAndTeam({localTestimonials, localTeam}: {
    localTestimonials: {[key: string]: any};
    localTeam: {[key: string]: any};
}) {
    return (
        <Row margin={{bottom: 'medium'}}>
            <Column id='testimonials' margin={{bottom: 'large'}} mobilePaddingMustHave={true}>
                <TestimonialsBlock
                    heading={localTestimonials['heading']}
                    text={localTestimonials['text']}
                    testimonials={testimonials(localTestimonials['testimonials'])}
                />
            </Column>

            <Column id='ourTeam' margin={{bottom: 'large'}}>
                <Heading.h2 marginBottom={'medium'} subtext={localTeam['heading']['subheading']}>
                    {parse(stringFormat(localTeam['heading']['text']))}
                </Heading.h2>
                <TeamBlock team={teamBlockContent(localTeam['members'])}/>
            </Column>
        </Row>
    )
}

export default HomePageRowTestimonialsAndTeam;