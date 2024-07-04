const testimonials = (local: { [key: string]: any }): Array<TestimonialProps> => [
    {
        name: local['testimonial1']['name'],
        text: local['testimonial1']['text'],
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-46-16.jpg'
    },{
        name: local['testimonial2']['name'],
        text: local['testimonial2']['text'],
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-46-43.jpg'
    },{
        name: local['testimonial3']['name'],
        text: local['testimonial3']['text'],
        photoUrl: 'https://agile-alpaca.com/wp-content/uploads/2023/10/2023-10-21_15-45-47.jpg'
    },
];

export default testimonials;