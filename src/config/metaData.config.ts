export const baseUrl: string = 'https://agile-alpaca.netlify.app/';

export const metaDataConfig = (local: { [key: string]: any }): {
    [key: string]: PageMetaDataInterface;
} => {
    return {
        homepage: {
            title: local['Homepage']['title'],
            metaDescription: local['Homepage']['metaDescription'],
            pageImageUrl: '/images/pages/alpaca_on_the_background_of_the_retro_miami_sun.webp'
        }
    }
}