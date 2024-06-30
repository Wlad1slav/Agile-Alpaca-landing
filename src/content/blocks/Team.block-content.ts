export const teamBlockContent= (t: (key: string) => string): TeamMemberProps[] => [
    {
        pageUrl: 'https://www.linkedin.com/in/oleksandr-radich/',
        name: t('members.member1.name'),
        position: t('members.member1.position'),
        imageUrl: '/images/pages/team/without-background/oleksandr.webp'
    },{
        name: t('members.member2.name'),
        position: t('members.member2.position'),
        imageUrl: '/images/pages/team/without-background/oksana.webp'
    },{
        name: t('members.member3.name'),
        position: t('members.member3.position'),
        imageUrl: '/images/pages/team/without-background/yurii.webp'
    },{
        pageUrl: 'https://github.com/Wlad1slav',
        name: t('members.member4.name'),
        position: t('members.member4.position'),
        imageUrl: '/images/pages/team/without-background/vladyslav.webp'
    },
]