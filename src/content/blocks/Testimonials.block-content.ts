const testimonials = (local: { [key: string]: any }): Array<TestimonialProps> => [
    {
        name: local['testimonial1']['name'],
        text: local['testimonial1']['text'],
        photoUrl: '/images/pages/testimonials/Mark_Dumnich.webp'
    },{
        name: local['testimonial2']['name'],
        text: local['testimonial2']['text'],
        photoUrl: '/images/pages/testimonials/Igor_Bilous.webp'
    },{
        name: local['testimonial3']['name'],
        text: local['testimonial3']['text'],
        photoUrl: '/images/pages/testimonials/Ivan_Kozak.webp'
    },
];

export default testimonials;