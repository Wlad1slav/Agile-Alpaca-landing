import Separator from "@/components/_general/separator/Separator";
import Column from "@/components/_general/positioning/Column";
import Heading from "@/components/_general/heading/Heading";
import ServiceCards from "@/components/_blocks/Services/ServicesCard/ServiceCards";
import {serviceCardsBlockContent} from "@/content/blocks/ServiceCards.block-content";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import {useTranslations} from "next-intl";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";

function HomePageRowServicesCard() {
    const localisationServiceCards = useTranslations('BlockServiceCards');

    return (
        <Row
            isContrast={true}
            separators={{
                top: <Separator.WaveTop />,
                bottom: <Separator.WaveBottom />,
            }}
            margin={{bottom: 'tiny'}}
        >
            <Column margin={{bottom: null}} mobilePaddingMustHave={true}>
                <Heading.h2
                    marginBottom={'medium'}
                    subtext={localisationServiceCards('heading.subheading')}
                    id={'getStarted'}
                >
                    {parse(stringFormat(localisationServiceCards('heading.text')))}
                </Heading.h2>

                <ServiceCards cards={serviceCardsBlockContent(localisationServiceCards)} />
            </Column>
        </Row>
    );
}

export default HomePageRowServicesCard;