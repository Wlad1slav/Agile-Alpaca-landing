export const global: {
    siteName: string;
    contacts: ContactsInterface;
    internationalisation: InternationalisationInterface;
} = {
    siteName: 'Agile Alpaca',
    contacts: {
        email: 'alpaca@agile-alpaca.com',
        mobile: '+1 (279) 336-2882',
        linkedin: '/'
    },
    internationalisation: {
        defaultLanguage: 'en',
        languages: ['en', 'ua', 'crt'],
        languagesSelect: [
            {
                name: "English",
                langUrl: "en",
                imgUrl: "/images/languages/en.webp"
            },{
                name: "Українська",
                langUrl: "ua",
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ64v0is3JxtjICBvBDShoiKZMspgwwaIgYg&s"
            },{
                name: "Къырымтатар",
                langUrl: "crt",
                imgUrl: "/images/languages/crt.webp"
            },
        ],
        localisationPath: `${process.env.NEXT_APP_DOMAIN}/localisation`
    }
}