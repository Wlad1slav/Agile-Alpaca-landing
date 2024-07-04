const navigationLinks = (local: { [key: string]: any }): Array<NavLinkProps> => [
    {
        text: local['link1'],
        href: 'services'
    },
    {
        text: local['link2'],
        href: 'caseStudies'
    },
    {
        text: local['link3'],
        href: 'testimonials'
    },
    {
        text: local['link4'],
        href: 'ourTeam'
    },
];

export default navigationLinks;