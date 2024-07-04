import React from "react";

/* Page metadata */
import {baseUrl, metaDataConfig} from "@/config/metaData.config";

/* Page rows */
import HomePageRowHead from "@/components/_pages/home/RowHead";
import HomePageRowServicesAndCTA from "@/components/_pages/home/RowServices&CTA";
import HomePageRowCaseStudies from "@/components/_pages/home/RowCaseStudies";
import HomePageRowServicesCard from "@/components/_pages/home/RowServicesCard";
import HomePageRowTestimonialsAndTeam from "@/components/_pages/home/RowTestimonials&Team";

/* Separate page styles */
import '../../components/_pages/home/style.scss';

/* Util for page internationalisation */
import fetchLocalisation from "@/utils/fetchLocalisation";


export async function generateMetadata({ params: {lang} }: {
    params: { lang: string; }
}) {
    const local = await fetchLocalisation(lang, 'metadata');
    const meta = metaDataConfig(local.data);

    return {
        metadataBase: new URL(baseUrl),
        title: meta.homepage.title,
        description: meta.homepage.metaDescription,
        openGraph: {
            title: meta.homepage.title,
            description: meta.homepage.metaDescription,
            images: meta.homepage.pageImageUrl,
        },
    };
}

export default async function Home({ params: {lang} }: {
    params: { lang: string; }
}) {

    const local = await fetchLocalisation(lang, 'home');

    return (
        <>
            <HomePageRowHead
                localHead={local.data['HomePageHead']}
                localGetStarted={local.data['BlockGetStarted']}
            />
            <HomePageRowServicesAndCTA
                localServices={local.data['BlockServices']}
                localCta={local.data['BlockCTA']}
            />
            <HomePageRowCaseStudies localCaseStudies={local.data['BlockCaseStudies']} />
            <HomePageRowServicesCard localServicesCard={local.data['BlockServiceCards']} />
            <HomePageRowTestimonialsAndTeam
                localTestimonials={local.data['BlockTestimonials']}
                localTeam={local.data['BlockTeam']}
            />
        </>
    );
}