import Separator from "@/components/_general/separator/Separator";
import Column from "@/components/_general/positioning/Column";
import Heading from "@/components/_general/heading/Heading";
import ServiceCards from "@/components/_blocks/Services/ServicesCard/ServiceCards";
import {serviceCardsBlockContent} from "@/content/blocks/ServiceCards.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";

function HomePageRowServicesCard({localServicesCard}: {
    localServicesCard: {[key: string]: any}
}) {
    return (
        <Row
            isContrast={true}
            separators={{
                top: <Separator.WaveTop/>,
                bottom: <Separator.WaveBottom/>,
            }}
            margin={{bottom: 'tiny'}}
        >
            <Column margin={{bottom: null}} mobilePaddingMustHave={true}>
                <Heading.h2
                    marginBottom={'medium'}
                    subtext={localServicesCard['heading']['subheading']}
                    id={'getStarted'}
                >
                    {parse(stringFormat(localServicesCard['heading']['text']))}
                </Heading.h2>

                <ServiceCards cards={serviceCardsBlockContent(localServicesCard['services'])}/>
            </Column>
        </Row>
    );
}

export default HomePageRowServicesCard;