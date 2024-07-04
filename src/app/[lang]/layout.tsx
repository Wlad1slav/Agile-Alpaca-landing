import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import fetchLocalisation from "@/utils/fetchLocalisation";

import '@/stylesheet/variables.css';
import '@/stylesheet/app.scss';
import '@/stylesheet/vta-theme-toggle.css';
import {global} from "@/config/site.config";
import {redirect} from "next/navigation";


export default async function RootLayout({ children, params: {lang} }: {
    children: React.ReactNode;
    params: {lang: string};
}) {

    if (!global.internationalisation.languages.find((value) => value === lang)) {
        redirect(global.internationalisation.defaultLanguage);
    }

    const local = await fetchLocalisation(lang, 'layout');

    return (
        <html lang={lang}>
            <body>
                <Header
                    localHeader={local.data['Header']}
                    localNavigation={local.data['Header']['navigation']}
                />
                    <div id="content">
                        {children}
                    </div>
                <Footer localFooter={local.data['Footer']} />
            </body>
        </html>
    );
}
