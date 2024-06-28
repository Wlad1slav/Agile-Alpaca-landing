import FooterHeadBlock from "@/app/components/Footer/FooterHeadBlock";

import footerConfig from "@/app/config/footer.config";

import './style/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="head">
                {
                    footerConfig.head.map((value) => {
                        return <FooterHeadBlock heading={value.heading} links={value.links} styles={value.styles} />
                    })
                }
            </div>

            <div className="foot">
                <p>{footerConfig.foot.copyright}</p>
                <p>{footerConfig.foot.info}</p>
            </div>
        </footer>
    );
}

export default Footer;