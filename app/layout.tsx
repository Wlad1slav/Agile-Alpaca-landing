import Header from "@/app/components/navigation/Header";
import Footer from "@/app/components/footer/Footer";

import './stylesheet/variables.css';
import './stylesheet/app.scss';
import './stylesheet/vta-theme-toggle.css';

import '../public/favicon.ico';

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
