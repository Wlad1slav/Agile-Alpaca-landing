import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import '@/stylesheet/variables.css';
import '@/stylesheet/app.scss';
import '@/stylesheet/vta-theme-toggle.css';
import {useTranslations} from "next-intl";
import navigationLinks from "@/config/navigation.config";

export default async function RootLayout({ children, params: {locale} }: {
    children: React.ReactNode;
    params: {locale: string};
}) {

    // const localNavigation = useTranslations('Header');
    // const navigation = navigationLinks(localNavigation);

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
