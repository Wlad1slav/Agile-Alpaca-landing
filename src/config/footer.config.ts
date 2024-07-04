import {global} from "./site.config";

const footerConfig = (local: { [key: string]: any }): {
    head: Array<FooterHeadBlockProps>;
    foot: { copyright: string; info: string; };
} => {
    return {
        head: [
            {
                heading: local['blocks']['block1'],
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
                heading: local['blocks']['block2'],
                links: [
                    {text: local['services']['service1'], url: '/'},
                    {text: local['services']['service2'], url: '/'},
                    {text: local['services']['service3'], url: '/'},
                    {text: local['services']['service4'], url: '/'},
                    {text: local['services']['service5'], url: '/'},
                    {text: local['services']['service6'], url: '/'},
                    {text: local['services']['service7'], url: '/'},
                ],
                styles: {
                    borderBottom: "2px solid rgb(60,60,60)",
                    borderRight: "2px solid rgb(60,60,60)",
                    paddingRight: "15%",
                    paddingLeft: "1%"
                }
            },
            {
                heading: local['blocks']['block3'],
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
            info: local['description']
        }
    }
}

export default footerConfig;