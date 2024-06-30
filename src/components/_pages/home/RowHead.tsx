import GetStartedBlock from "@/components/_blocks/GetStarted/GetStartedBlock";
import Column from "@/components/_general/positioning/Column";
import InformationCard from "@/components/InformationCard/InformationCard";
import Icon from "@/components/_general/icon/Icon";
import Row from "@/components/_general/positioning/Row";
import React from "react";
import {useTranslations} from "next-intl";

function HomePageRowHead() {
    const localisationHead = useTranslations('HomePageHead');
    const localisationGetStarted = useTranslations('BlockGetStarted');

    return (
        <Row>
            <div className="block--centralized">
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>{localisationHead('heading')}</h1>
                    <p style={{textAlign: "center", width: "60%"}}>{localisationHead('text')}</p>
                </div>

                <GetStartedBlock
                    fieldPlaceholder={localisationGetStarted('placeholder')}
                    buttonText={localisationGetStarted('button')}
                />
            </div>

            <Column>
                <div className={'block--bright'}>
                    <InformationCard
                        title={localisationHead('infoCards.card1.title')}
                        subtitle={localisationHead('infoCards.card1.subtitle')}
                        hasBack={true}
                        mainIcon={<Icon.web fill="fill--standard" className="icon--main" />}
                        mainIconPlace={'left'}
                        className={'card1'}
                        additionalIcons={[
                            <Icon.wordpress key='wordpress' fill='fill--wordpress' />,
                            <Icon.react key='react' fill='fill--react' />,
                            <Icon.vue key='vue' fill='fill--vue' />,
                            <Icon.nodejs key='nodejs' fill='fill--nodejs' />,
                            <Icon.sass key='sass' fill='fill--sass' />,
                            <Icon.laravel key='laravel' fill='fill--laravel' />,
                        ]}
                    >
                        {localisationHead('infoCards.card1.text')}
                    </InformationCard>

                    <InformationCard
                        title={localisationHead('infoCards.card2.title')}
                        subtitle={localisationHead('infoCards.card2.subtitle')}
                        mainIcon={<Icon.growUp fill="fill--standard" className="icon--main" />}
                        mainIconPlace={'near-title'}
                        className={'card2'}
                    >
                        {localisationHead('infoCards.card2.text')}
                    </InformationCard>

                    <InformationCard
                        title={localisationHead('infoCards.card3.title')}
                        subtitle={localisationHead('infoCards.card3.subtitle')}
                        mainIcon={<Icon.hubspot fill="fill--standard" className="icon--main" />}
                        mainIconPlace={'top'}
                        className={'card3'}
                        width='250px'
                    >
                        {localisationHead('infoCards.card3.text')}
                    </InformationCard>

                    <InformationCard
                        title={localisationHead('infoCards.card4.title')}
                        subtitle={localisationHead('infoCards.card4.subtitle')}
                        mainIcon={<Icon.shopify fill="fill--standard" className="icon--main" />}
                        mainIconPlace={'left'}
                        className={'card4'}
                        width='450px'
                    >
                        {localisationHead('infoCards.card4.text')}
                    </InformationCard>
                </div>
            </Column>
        </Row>
    )
}

export default HomePageRowHead;