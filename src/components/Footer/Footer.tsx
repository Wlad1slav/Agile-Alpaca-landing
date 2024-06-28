import FooterHeadBlock from "@/components/Footer/FooterHeadBlock";

import footerConfig from "@/config/footer.config";

import './style/footer.scss';

function Footer() {
    return (
        <footer>
            <div className="head">
                {
                    footerConfig.head.map((value, index) => {
                        return <FooterHeadBlock
                            heading={value.heading}
                            links={value.links}
                            styles={value.styles}
                            key={`${value}_${index}`}
                        />
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