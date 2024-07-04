

const caseStudies = (local: { [key: string]: any }): Array<CaseStudyProps> => [
    {
        title: local['cs1']['title'],
        subtitle: local['cs1']['subtitle'],
        text: local['cs1']['description'],
        pageLink: 'https://impala-freight.com/',
        imageLink: '/images/pages/case-studies/impala-freight.webp'
    },{
        title: local['cs2']['title'],
        subtitle: local['cs2']['subtitle'],
        text: local['cs2']['description'],
        pageLink: 'https://westernbid.com/',
        imageLink: 'https://cdn.prod.website-files.com/646a0068ffc7d3ef567e9d3d/647b9ac4017a9563bc27a5e1_nav_logo.svg'
    },{
        title: local['cs3']['title'],
        subtitle: local['cs3']['subtitle'],
        text: local['cs3']['description'],
        pageLink: 'https://dumarko.com/',
        imageLink: '/images/pages/case-studies/dumarko.webp'
    },{
        title: local['cs4']['title'],
        subtitle: local['cs4']['subtitle'],
        text: local['cs4']['description'],
        pageLink: 'https://xpel1.com/',
        imageLink: '/images/pages/case-studies/Xpel1-logo.webp'
    },{
        title: local['cs5']['title'],
        subtitle: local['cs5']['subtitle'],
        text: local['cs5']['description'],
        pageLink: 'https://goodlifegrp.com/',
        imageLink: '/images/pages/case-studies/goodlife-group.webp'
    },{
        title: local['cs6']['title'],
        subtitle: local['cs6']['subtitle'],
        text: local['cs6']['description'],
        pageLink: 'https://glinspections.com/',
        imageLink: '/images/pages/case-studies/goodlife-inspection.webp'
    },{
        title: local['cs7']['title'],
        subtitle: local['cs7']['subtitle'],
        text: local['cs7']['description'],
        pageLink: 'https://angelinalily.com/',
        imageLink: '/images/pages/case-studies/angelina-lily.webp'
    },{
        title: local['cs8']['title'],
        subtitle: local['cs8']['subtitle'],
        text: local['cs8']['description'],
        pageLink: 'https://allwooden.biz/',
        imageLink: 'https://allwooden.biz/cdn/shop/files/isla_280x280.43090717_g7sg9g6k-removebg-preview.png?v=1716297082&width=135'
    },{
        title: local['cs9']['title'],
        subtitle: local['cs9']['subtitle'],
        text: local['cs9']['description'],
        pageLink: 'https://buzzcrafts.art/',
        imageLink: 'https://buzzcrafts.art/cdn/shop/files/BazzCrafts_Baloo_Bhai_2_variants_2.svg?v=1715703879&width=135'
    },
];

export default caseStudies;