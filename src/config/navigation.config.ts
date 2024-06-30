const navigationLinks = (t: (key: string) => string): Array<NavLinkProps> => [
    {
        text: t('navigation.link1'),
        href: 'services'
    },
    {
        text: t('navigation.link2'),
        href: 'caseStudies'
    },
    {
        text: t('navigation.link3'),
        href: 'testimonials'
    },
    {
        text: t('navigation.link4'),
        href: 'ourTeam'
    },
];

export default navigationLinks;