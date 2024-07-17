import React, { useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import fetchLocalisation from "@/utils/fetchLocalisation";
import GetStartedForm from "@/components/GetStartedForm/GetStartedForm";
import './page.scss';

// export async function generateMetadata({ params: {lang} }: {
//     params: { lang: string; }
// }): Promise<Metadata> {
//     // Fetch the localisation for the metadata
//     const local = await fetchLocalisation(lang, 'metadata');

//     // Create the metadata configuration
//     const meta = metaDataConfig(local.data);

//     // Return the metadata
//     return {
//         metadataBase: new URL(baseUrl),
//         title: meta.homepage.title,
//         description: meta.homepage.metaDescription,
//         openGraph: {
//             title: meta.homepage.title,
//             description: meta.homepage.metaDescription,
//             images: meta.homepage.pageImageUrl,
//         },
//     };
// }

export default async function GetStarted() {

    return (
        <main>
            <div className="get-started">
                <Image src="/images/logo.webp" alt="Alpaca Agile logo" width={100} height={100} />
                <h1>Get started</h1>

                <GetStartedForm />
            </div>
        </main>
    )
}