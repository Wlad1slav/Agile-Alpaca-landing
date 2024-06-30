const testimonials = (t: (key: string) => string): Array<TestimonialProps> => [
    {
        name: t('testimonials.testimonial1.name'),
        text: t('testimonials.testimonial1.text'),
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-46-16.jpg'
    },{
        name: t('testimonials.testimonial2.name'),
        text: t('testimonials.testimonial2.text'),
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-46-43.jpg'
    },{
        name: t('testimonials.testimonial3.name'),
        text: t('testimonials.testimonial3.text'),
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-45-47.jpg'
    },
];

export default testimonials;