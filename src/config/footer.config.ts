import {global} from "@/config/site.config";

const footerConfig: {
    head: Array<FooterHeadBlockProps>;
    foot: { copyright: string; info: string; };
} = {
    head: [
        {
            heading: 'Contacts',
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
            heading: 'Our services',
            links: [
                {text: 'Web development', url: '/'},
                {text: 'Account-Based Marketing', url: '/'},
                {text: 'Creating a Shopify store', url: '/'},
                {text: 'Inbound Marketing', url: '/'},
                {text: 'CRM Integration', url: '/'},
                {text: 'Marketing Strategy', url: '/'},
                {text: 'Advertising', url: '/'},
            ],
            styles: {
                borderBottom: "2px solid rgb(60,60,60)",
                borderRight: "2px solid rgb(60,60,60)",
                paddingRight: "15%",
                paddingLeft: "1%"
            }
        },
        {
            heading: 'We are on social networks',
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
        info: 'Agile Alpaca is a marketing agency focused on building trust and gaining devoted customers through personalized web development, CRM integration, inbound marketing, and e-commerce solutions. Let\'s craft a winning marketing and sales journey together!'
    }
}

export default footerConfig;