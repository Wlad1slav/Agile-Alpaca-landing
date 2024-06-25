import React from "react";

import Separator from "@/app/components/general/separator/Separator";
import Row from "@/app/components/general/positioning/Row";
import Column from "@/app/components/general/positioning/Column";
import Icon from "@/app/components/general/icon/Icon";
import Heading from "@/app/components/general/heading/Heading";
import InformationCard from "@/app/components/informationCard/InformationCard";
import CallToAction from "@/app/components/cta/CallToAction";

import ServicesModule from "@/app/modules/services/ServicesModule";
import GetStartedModule from "@/app/modules/getStarted/GetStartedModule";
import Team from "@/app/modules/team/Team";
import Testimonials from "@/app/modules/testimonials/Testimonials";
import OptionSelectionCards from "@/app/modules/optionSelectionCards/OptionSelectionCards";
import CaseStudiesModule from "@/app/modules/caseStudies/CaseStudiesModule";

import caseStudies from "@/app/config/caseStudies.config";
import {services} from "@/app/config/services.config";
import {teamConfig} from "@/app/config/team.config";
import {optionCards} from "@/app/config/optionCards";
import testimonials from "@/app/config/testimonials.config";
import {baseUrl, metaDataConfig} from "@/app/config/metaData.config";

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

                    <GetStartedModule />
                </div>

                <Column>
                    <div className={'block--bright'}>
                        <InformationCard
                            title='Web Development'
                            subtitle='A site for your business'
                            hasBack={true}
                            mainIcon={<Icon.web fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'left'}
                            position={{
                                left: "7%",
                                top: "20%"
                            }}
                            additionalIcons={[
                                <Icon.wordpress fill='fill--wordpress' />,
                                <Icon.react fill='fill--react' />,
                                <Icon.vue fill='fill--vue' />,
                                <Icon.nodejs fill='fill--nodejs' />,
                                <Icon.sass fill='fill--sass' />,
                                <Icon.laravel fill='fill--laravel' />,
                            ]}
                        >
                            Let’s bring that dream to life! We craft beautiful websites with love, backed by thorough UX research and tailored designs.
                        </InformationCard>

                        <InformationCard
                            title='Inbound Marketing'
                            mainIcon={<Icon.growUp fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'near-title'}
                            position={{
                                left: "55%",
                                top: "50%"
                            }}
                        >
                            Feeling like you’re not catching enough leads? Don’t worry! We’re here to sprinkle some magic with
                            strategic inbound marketing, account-based marketing, and digital advertising.
                        </InformationCard>

                        <InformationCard
                            title='CRM Integration'
                            mainIcon={<Icon.hubspot fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'top'}
                            position={{
                                left: "10%",
                                top: "65%"
                            }}
                            width='250px'
                        />

                        <InformationCard
                            title='Development of Shopify stores'
                            mainIcon={<Icon.shopify fill="fill--standard" className="icon--main" />}
                            mainIconPlace={'left'}
                            position={{
                                left: "50%",
                                top: "15%"
                            }}
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

                    <ServicesModule services={services} />
                </Column>

                <Column isContentCentralized={true} style={{marginInline: "5%"}}>
                    <CallToAction
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
                            subtext: 'We will develop a presentable website for you according to your needs.',
                            list: [
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                            ],
                            buttonUrl: '/'
                        }}
                        ctaContainerRight={{
                            rotate: 'right',
                            headIcon: <Icon.web />,
                            headHeading: 'Development of your site',
                            subtext: 'We will develop a presentable website for you according to your needs.',
                            list: [
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
                                'Lorem ipsum dolor sit amet',
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

                    <CaseStudiesModule caseStudies={caseStudies} />
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

                    <OptionSelectionCards cards={optionCards} />
                </Column>
            </Row>

            <Row margin={{bottom: 'medium'}}>
                <Column id='testimonials' margin={{bottom: 'large'}} mobilePaddingMustHave={true}>
                    <Testimonials testimonials={testimonials} />
                </Column>

                <Column id='ourTeam' margin={{bottom: 'large'}}>
                    <Heading.h2 marginBottom={'medium'}>
                        <span>Out Team</span>
                    </Heading.h2>
                    <Team team={teamConfig} />
                </Column>
            </Row>
        </>
    );
}
