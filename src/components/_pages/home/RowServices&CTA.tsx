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

function HomePageRowServicesAndCTA({localServices, localCta}: {
    localServices: {[key: string]: any};
    localCta: {[key: string]: any};
}) {

    return (
        <Row id={'services'} margin={{bottom: "medium"}}>
            <Column margin={{bottom: "huge"}}>
                <Heading.h2 subtext={localServices['heading']['subheading']} marginBottom={'medium'}>
                    {parse(stringFormat(localServices['heading']['text']))}
                </Heading.h2>

                <ServicesBlock services={services(localServices['services'])}/>
            </Column>

            <Column isContentCentralized={true} style={{marginInline: "1%"}}>
                <CallToActionBlock
                    heading={localCta['heading']}
                    text={localCta['text']}
                    buttonUrl='/'
                    buttonText={localCta['button']}
                    ctaContainerLeft={{
                        rotate: 'left',
                        headIcon: <Icon.web/>,
                        headHeading: localCta['leftContainer']['heading'],
                        subtext: localCta['leftContainer']['subtext'],
                        list: localCta['leftContainer']['list'].split('.'),
                        buttonUrl: '/',
                        cta: localCta['containersButton']
                    }}
                    ctaContainerRight={{
                        rotate: 'right',
                        headIcon: <Icon.shopify/>,
                        headHeading: localCta['rightContainer']['heading'],
                        subtext: localCta['rightContainer']['subtext'],
                        list: localCta['rightContainer']['list'].split('.'),
                        buttonUrl: '/',
                        cta: localCta['containersButton']
                    }}
                />
            </Column>
        </Row>
    )
}

export default HomePageRowServicesAndCTA;