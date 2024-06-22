import type { Metadata } from "next";

import Header from "@/app/components/navigation/Header";
import Footer from "@/app/components/footer/Footer";

import './stylesheet/app.scss';
import './stylesheet/app.dark.scss';

import '../public/favicon.ico';

export const metadata: Metadata = {
    title: "Agile Alpaca Agency | Build Your Audience and Get Devoted Customers",
    description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
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
