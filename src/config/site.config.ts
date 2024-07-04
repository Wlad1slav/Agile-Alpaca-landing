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
        localisationPath: `${process.env.NEXT_APP_DOMAIN}/localisation`
    }
}