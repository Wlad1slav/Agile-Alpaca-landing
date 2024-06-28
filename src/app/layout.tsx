import Header from "@/components/_navigation/Header";
import Footer from "@/components/Footer/Footer";

import '@/stylesheet/variables.css';
import '@/stylesheet/app.scss';
import '@/stylesheet/vta-theme-toggle.css';

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
