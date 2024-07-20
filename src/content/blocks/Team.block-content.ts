export const teamBlockContent= (local: { [key: string]: any }): TeamMemberProps[] => [
    {
        pageUrl: 'https://www.linkedin.com/in/oleksandr-radich/',
        name: local['member1']['name'],
        position: local['member1']['position'],
        imageUrl: '/images/pages/team/without-background/oleksandr.webp',
        title: 'LinkedIn profile of Oleksandr Radich' 
    },{
        name: local['member2']['name'],
        position: local['member2']['position'],
        imageUrl: '/images/pages/team/without-background/oksana.webp'
    },{
        name: local['member3']['name'],
        position: local['member3']['position'],
        imageUrl: '/images/pages/team/without-background/yurii.webp'
    },{
        pageUrl: 'https://github.com/Wlad1slav',
        name: local['member4']['name'],
        position: local['member4']['position'],
        imageUrl: '/images/pages/team/without-background/vladyslav.webp',
        title: 'GitHub profile of Vladyslav Fokin'
    },
]