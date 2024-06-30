import {redirect} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ua', 'crt'];

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) redirect('/en/404');

    return {
        messages: (await import(`./content/localisation/${locale}.json`)).default
    };
});