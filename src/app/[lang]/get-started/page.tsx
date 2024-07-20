import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {baseUrl} from "@/config/metaData.config";
import GetStartedForm from "@/components/GetStartedForm/GetStartedForm";
import './page.scss';

export async function generateMetadata(): Promise<Metadata> {

    const title = 'Get started';

    const meta = 'Get started with Alpaca Agile Agency to build trust and gain devoted customers!';

    return {
        metadataBase: new URL(baseUrl),
        title: title,
        description: meta,
        openGraph: {
            title: title,
            description: meta
        },
    };
}

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