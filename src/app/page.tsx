import React from "react";

import Separator from "@/components/_general/separator/Separator";
import Row from "@/components/_general/positioning/Row";
import Column from "@/components/_general/positioning/Column";
import Icon from "@/components/_general/icon/Icon";
import Heading from "@/components/_general/heading/Heading";
import InformationCard from "@/components/InformationCard/InformationCard";
import CallToActionBlock from "@/components/_blocks/CTA/CallToActionBlock";

import ServicesBlock from "@/components/_blocks/Services/ServicesBlock";
import GetStartedBlock from "@/components/_blocks/GetStarted/GetStartedBlock";
import TeamBlock from "@/components/_blocks/Team/TeamBlock";
import TestimonialsBlock from "@/components/_blocks/Testimonials/TestimonialsBlock";
import OptionSelectionCardsBlock from "@/components/_blocks/OptionSelectionCards/OptionSelectionCardsBlock";
import CaseStudiesBlock from "@/components/_blocks/CaseStudies/CaseStudiesBlock";

import caseStudies from "@/content/blocks/CaseStudies.block-content";
import {services} from "@/content/blocks/Services.block-content";
import {teamBlockContent} from "@/content/blocks/Team.block-content";
import {optionCardsBlockContent} from "@/content/blocks/OptionCards.block-content";
import testimonials from "@/content/blocks/Testimonials.block-content";
import {baseUrl, metaDataConfig} from "@/config/metaData.config";

/* Separate page styles */
import './style.scss';

export async function generateMetadata() {
    return {
        metadataBase: new URL(baseUrl),
        title: metaDataConfig.homepage.title,
        description: metaDataConfig.homepage.metaDescription,
        openGraph: {
            title: metaDataConfig.homepage.title,
            description: metaDataConfig.homepage.metaDescription,
            images: metaDataConfig.homepage.pageImageUrl,
        },
    };
}

export default function Home() {
    return (
        <>
            <Row>
                <div className="block--centralized">
                    <div className='container'>
                        <h1 style={{textAlign: "center"}}>Build Trust, Gain Devoted Customers</h1>
                        <p style={{textAlign: "center", width: "60%"}}>Build Your Audience & Get Devoted Customers with Agile Alpaca, Marketing Agency Targeted at Human Relationships</p>
                    </div>

                    <GetStartedBlock />
                </div>

                <Column>
                    <div className={'block--bright'}>
                        <InformationCard
                            title='Web Development'
                            subtitle='A site for your business'
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
                            Let’s bring that dream to life! We craft beautiful websites with love, backed by thorough UX research and tailored designs.
                        </InformationCard>

                        <InformationCard
                            title='Inbound Marketing'
                            mainIcon={<Icon.growUp fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'near-title'}
                            className={'card2'}
                        >
                            Feeling like you’re not catching enough leads? Don’t worry! We’re here to sprinkle some magic with
                            strategic inbound marketing, account-based marketing, and digital advertising.
                        </InformationCard>

                        <InformationCard
                            title='CRM Integration'
                            mainIcon={<Icon.hubspot fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'top'}
                            className={'card3'}
                            width='250px'
                        />

                        <InformationCard
                            title='Development of Shopify stores'
                            mainIcon={<Icon.shopify fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'left'}
                            className={'card4'}
                            width='450px'
                        />
                    </div>
                </Column>
            </Row>

            <Row id='services' margin={{bottom: "medium"}}>
                <Column margin={{bottom: "huge"}}>
                    <Heading.h2 subtext='Our services' marginBottom={'medium'}>
                        Services we <span>can do</span> for you
                    </Heading.h2>

                    <ServicesBlock services={services} />
                </Column>

                <Column isContentCentralized={true} style={{marginInline: "1%"}}>
                    <CallToActionBlock
                        heading='Let’s Craft a Winning Marketing & Sales Journey Together!'
                        text='Hey there! We’re Agile Alpaca, your friendly neighborhood marketing agency, dedicated to creating
                        tailor-made strategies for every client, regardless of industry or niche. Dive in to learn more about
                        our unique touch!'
                        buttonUrl='/'
                        buttonText='Contact us'
                        ctaContainerLeft={{
                            rotate: 'left',
                            headIcon: <Icon.web />,
                            headHeading: 'Development of your site',
                            subtext: 'Streamlined site development for seamless online presence.',
                            list: [
                                'Custom web design to fit your brand',
                                'Responsive layouts for all devices',
                                'CRM system integration for efficiency',
                                'SEO optimization to boost search rankings',
                                'Secure hosting and ongoing maintenance',
                            ],
                            buttonUrl: '/'
                        }}
                        ctaContainerRight={{
                            rotate: 'right',
                            headIcon: <Icon.shopify />,
                            headHeading: 'Help in creating a Shopify store',
                            subtext: 'Effortlessly create and manage your Shopify store with our expert services.',
                            list: [
                                'Unique themes to match your brand',
                                'Efficient product listings and inventory',
                                'Boost visibility with SEO',
                                'Secure payments and easy shipping',
                                'Continuous updates and support',
                            ],
                            buttonUrl: '/'
                        }}
                    />
                </Column>
            </Row>

            <Row style={{
                paddingInline: "15%",
            }} id='caseStudies'>
                <Column style={{position: "relative"}}>
                    <Heading.h2
                        subtext='Case studies'
                        marginBottom={'medium'}
                        isAbsolute={true}
                        position={{ left: "1%" }}
                        textAlign={'left'}
                    >
                        Browse <span>our past</span><br /> case studies
                    </Heading.h2>

                    <CaseStudiesBlock caseStudies={caseStudies} />
                </Column>
            </Row>

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
                        subtext='Already know what you need?'
                        id='getStarted'
                    >
                        <span>Choose a service</span>
                    </Heading.h2>

                    <OptionSelectionCardsBlock cards={optionCardsBlockContent} />
                </Column>
            </Row>

            <Row margin={{bottom: 'medium'}}>
                <Column id='testimonials' margin={{bottom: 'large'}} mobilePaddingMustHave={true}>
                    <TestimonialsBlock testimonials={testimonials} />
                </Column>

                <Column id='ourTeam' margin={{bottom: 'large'}}>
                    <Heading.h2 marginBottom={'medium'}>
                        <span>Out Team</span>
                    </Heading.h2>
                    <TeamBlock team={teamBlockContent} />
                </Column>
            </Row>
        </>
    );
}
