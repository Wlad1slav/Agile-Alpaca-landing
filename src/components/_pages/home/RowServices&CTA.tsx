import Column from "@/components/_general/positioning/Column";
import Heading from "@/components/_general/heading/Heading";
import parse from "html-react-parser";
import stringFormat from "@/utils/stringFormat";
import ServicesBlock from "@/components/_blocks/Services/ServicesContainer/ServicesBlock";
import {services} from "@/content/blocks/Services.block-content";
import CallToActionBlock from "@/components/_blocks/CTA/CallToActionBlock";
import Icon from "@/components/_general/icon/Icon";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from "next-intl/server";

function HomePageRowServicesAndCTA() {
    unstable_setRequestLocale('en');
    const localisationServices = useTranslations('BlockServices');
    const localisationCta = useTranslations('BlockCTA');

    return (
        <Row id={'services'} margin={{bottom: "medium"}}>
            <Column margin={{bottom: "huge"}}>
                <Heading.h2 subtext={localisationServices('heading.subheading')} marginBottom={'medium'}>
                    {parse(stringFormat(localisationServices('heading.text')))}
                </Heading.h2>

                <ServicesBlock services={services(localisationServices)}/>
            </Column>

            <Column isContentCentralized={true} style={{marginInline: "1%"}}>
                <CallToActionBlock
                    heading={localisationCta('heading')}
                    text={localisationCta('text')}
                    buttonUrl='/'
                    buttonText={localisationCta('button')}
                    ctaContainerLeft={{
                        rotate: 'left',
                        headIcon: <Icon.web/>,
                        headHeading: localisationCta('leftContainer.heading'),
                        subtext: localisationCta('leftContainer.subtext'),
                        list: localisationCta('leftContainer.list').split('.'),
                        buttonUrl: '/'
                    }}
                    ctaContainerRight={{
                        rotate: 'right',
                        headIcon: <Icon.shopify/>,
                        headHeading: localisationCta('rightContainer.heading'),
                        subtext: localisationCta('rightContainer.subtext'),
                        list: localisationCta('rightContainer.list').split('.'),
                        buttonUrl: '/'
                    }}
                />
            </Column>
        </Row>
    )
}

export default HomePageRowServicesAndCTA;