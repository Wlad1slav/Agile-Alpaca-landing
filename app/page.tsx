import React from "react";

import GetStartedModule from "@/app/modules/getStarted/GetStartedModule";
import InformationCard from "@/app/components/informationCard/InformationCard";
import Icon from "@/app/components/icon/Icon";


export default function Home() {
    return (
        <>
            <div className="block--centralized">
                <div className='container'>
                    <h1 style={{textAlign: "center"}}>Build Trust, Gain Devoted Customers</h1>
                    <p style={{textAlign: "center", width: "60%"}}>Build Your Audience & Get Devoted Customers with Agile Alpaca, Marketing Agency Targeted at Human Relationships</p>
                </div>

                <GetStartedModule />
            </div>

            <div className={'block--bright'}>
                <InformationCard
                    title='Web Development'
                    subtitle='A site for your business'
                    hasBack={true}
                    mainIcon={<Icon.web fill="fill--standard" className="icon--main" />}
                    mainIconPlace={'left'}
                    position={{
                        left: "15%",
                        top: "10%"
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
                        left: "60%",
                        top: "30%"
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
                        left: "25%",
                        top: "65%"
                    }}
                    width='200px'
                />
            </div>


        </>
    );
}
