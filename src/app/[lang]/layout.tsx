import {redirect} from "next/navigation";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import {global} from "@/config/site.config";
import fetchLocalisation from "@/utils/fetchLocalisation";

import '@/stylesheet/variables.css';
import '@/stylesheet/app.scss';
import '@/stylesheet/vta-theme-toggle.css';

/**
 * RootLayout component is the layout for all pages on the website. It handles redirecting to the default language if the
 * user is trying to access a page in a language that is not supported and fetches the localisation data for the layout.
 *
 * @param {Object} props - The props object containing the children and lang.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the layout.
 * @param {string} props.params.lang - The language of the page.
 * @return {Promise<JSX.Element>} The JSX element representing the layout.
 */
export default async function RootLayout({ children, params: {lang} }: {
    children: React.ReactNode;
    params: {lang: string};
}) {
    // Redirect to the default language if the user is trying to access a page in a language that is not supported
    if (!global.internationalisation.languages.find((value) => value === lang)) {
        redirect(global.internationalisation.defaultLanguage);
    }

    // Fetch the localisation data for the layout
    const local = await fetchLocalisation(lang, 'layout');

    return (
        <html lang={lang}>
            <body>
                <Header
                    localHeader={local.data['Header']}
                />
                    <div id="content">
                        {children}
                    </div>
                <Footer localFooter={local.data['Footer']} />
            </body>
        </html>
    );
}
