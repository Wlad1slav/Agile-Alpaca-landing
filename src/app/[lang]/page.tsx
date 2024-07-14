import React from "react";
import { Metadata } from "next";

/* Page metadata */
import {baseUrl, metaDataConfig} from "@/config/metaData.config";

/* Page rows */
import HomePageRowHead from "@/components/_pages/home/RowHead";
import HomePageRowServicesAndCTA from "@/components/_pages/home/RowServices&CTA";
import HomePageRowCaseStudies from "@/components/_pages/home/RowCaseStudies";
import HomePageRowServicesCard from "@/components/_pages/home/RowServicesCard";
import HomePageRowTestimonialsAndTeam from "@/components/_pages/home/RowTestimonials&Team";

/* Components */
import HeaderFixed from "@/components/Header/HeaderFixed";

/* Separate page styles */
import '../../components/_pages/home/style.scss';

/* Util for page internationalisation */
import fetchLocalisation from "@/utils/fetchLocalisation";
import HeaderSwitcher from "@/components/Header/HeaderSwitcher";
import navigationLinks from "@/config/navigation.config";


/**
 * Generates metadata for the page.
 *
 * @param {Object} props - The props passed to the page.
 * @param {string} props.params.lang - The language code of the page.
 * @returns {Object} The metadata for the page.
 */
export async function generateMetadata({ params: {lang} }: {
    params: { lang: string; }
}): Promise<Metadata> {
    // Fetch the localisation for the metadata
    const local = await fetchLocalisation(lang, 'metadata');

    // Create the metadata configuration
    const meta = metaDataConfig(local.data);

    // Return the metadata
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

/**
 * The home page of the landing.
 *
 * @param {Object} props - The props passed to the page.
 * @param {string} props.params.lang - The language code of the page.
 * @returns {JSX.Element} The JSX element to render the page.
 */
export default async function Home({ params: { lang } }: { params: { lang: string } }): Promise<JSX.Element> {
  // Fetch the localisation for the page
  const localizations = await fetchLocalisation(lang, 'home');

  // Get the navigation links for the page
  const navigation = navigationLinks(localizations.data['Navigation']);

  // Get the blocks for the page
  const homePageHead = localizations.data['HomePageHead'];
  const getStartedBlock = localizations.data['BlockGetStarted'];
  const servicesBlock = localizations.data['BlockServices'];
  const ctaBlock = localizations.data['BlockCTA'];
  const caseStudiesBlock = localizations.data['BlockCaseStudies'];
  const serviceCardsBlock = localizations.data['BlockServiceCards'];
  const testimonialsBlock = localizations.data['BlockTestimonials'];
  const teamBlock = localizations.data['BlockTeam'];

  // Return the page
  return (
    <>
      {/* The header of the page. The header is always fixed. 
      It is rendered in a switcher. Rendered separately from the main header */}
      <HeaderSwitcher fixedHeader={<HeaderFixed navigation={navigation} />} />

      {/* The head section of the page */}
      <HomePageRowHead localHead={homePageHead} localGetStarted={getStartedBlock} />

      {/* The services and cta sections of the page */}
      <HomePageRowServicesAndCTA localServices={servicesBlock} localCta={ctaBlock} />

      {/* The case studies section of the page */}
      <HomePageRowCaseStudies localCaseStudies={caseStudiesBlock} />

      {/* The services card section of the page */}
      <HomePageRowServicesCard localServicesCard={serviceCardsBlock} />

      {/* The testimonials and team sections of the page */}
      <HomePageRowTestimonialsAndTeam localTestimonials={testimonialsBlock} localTeam={teamBlock} />
    </>
  );
}
