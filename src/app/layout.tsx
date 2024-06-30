import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import '@/stylesheet/variables.css';
import '@/stylesheet/app.scss';
import '@/stylesheet/vta-theme-toggle.css';
import {getMessages, unstable_setRequestLocale} from "next-intl/server";


// const locales = ['en', 'ua', 'crt'];
//
// export function generateStaticParams() {
//     return locales.map((locale) => ({locale}));
// }

export default async function RootLayout({ children, params: {locale} }: {
    children: React.ReactNode;
    params: {locale: string};
}) {

    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <Header />
                <div id="content">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
