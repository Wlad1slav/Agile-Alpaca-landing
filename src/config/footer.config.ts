import {global} from "./site.config";

const footerConfig = (t: (key: string) => string): {
    head: Array<FooterHeadBlockProps>;
    foot: { copyright: string; info: string; };
} => {
    return {
        head: [
            {
                heading: t('blocks.block1'),
                links: [
                    {text: global.contacts.email ?? '', url: `mailto:${global.contacts.email}`},
                    {text: global.contacts.mobile ?? '', url: `tel:${global.contacts.mobile}`},
                ],
                styles: {
                    borderBottom: "2px solid rgb(60,60,60)",
                    borderRight: "2px solid rgb(60,60,60)",
                    paddingRight: "30%"
                }
            },
            {
                heading: t('blocks.block2'),
                links: [
                    {text: t('services.service1'), url: '/'},
                    {text: t('services.service2'), url: '/'},
                    {text: t('services.service3'), url: '/'},
                    {text: t('services.service4'), url: '/'},
                    {text: t('services.service5'), url: '/'},
                    {text: t('services.service6'), url: '/'},
                    {text: t('services.service7'), url: '/'},
                ],
                styles: {
                    borderBottom: "2px solid rgb(60,60,60)",
                    borderRight: "2px solid rgb(60,60,60)",
                    paddingRight: "15%",
                    paddingLeft: "1%"
                }
            },
            {
                heading: t('blocks.block3'),
                links: [
                    {text: 'LinkendIn', url: '/'},
                    {text: 'GitHub', url: '/'},
                ],
                styles: {
                    borderBottom: "2px solid rgb(60,60,60)",
                    paddingRight: "10%",
                    paddingLeft: "1%"
                }
            },
        ],
        foot: {
            copyright: `© 2024 by ${global.siteName}`,
            info: t('description')
        }
    }
}

export default footerConfig;