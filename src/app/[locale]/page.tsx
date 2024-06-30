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
import {unstable_setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

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

export default async function Home({ params: { locale } }: LocalProps) {
    await unstable_setRequestLocale('en');

    return (
        <>
            <HomePageRowHead />
            <HomePageRowServicesAndCTA />
            <HomePageRowCaseStudies />
            <HomePageRowServicesCard />
            <HomePageRowTestimonialsAndTeam />
        </>
    );
}
