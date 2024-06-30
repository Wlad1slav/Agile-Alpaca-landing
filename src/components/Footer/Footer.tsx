import {useTranslations} from "next-intl";

import FooterHeadBlock from "@/components/Footer/FooterHeadBlock";

import footerConfig from "@/config/footer.config";

import './style/footer.scss';

function Footer() {
    // @ts-ignore
    const localisationFooter = useTranslations('Footer');
    const footer = footerConfig(localisationFooter);

    return (
        <footer>
            <div className="head">
                {
                    footer.head.map((value, index) => {
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
                <p>{footer.foot.copyright}</p>
                <p>{footer.foot.info}</p>
            </div>
        </footer>
    );
}

export default Footer;