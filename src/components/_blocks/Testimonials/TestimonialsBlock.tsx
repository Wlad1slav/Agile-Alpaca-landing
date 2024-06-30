import Icon from "@/components/_general/icon/Icon";
import Testimonial from "@/components/_blocks/Testimonials/Testimonial";

import './styles/testimonials.block.scss';

function TestimonialsBlock({testimonials, heading, text}: Readonly<{
    testimonials: Array<TestimonialProps>;
    heading: string;
    text: string;
}>) {
    return (
        <div className="testimonials">
            <div className="side">
                <h2>{heading}</h2>

                <div className="quote">
                    <Icon.quote />
                    <p>{text}</p>
                </div>

                <div className="stars">
                    <Icon.star />
                    <Icon.star />
                    <Icon.star />
                    <Icon.star />
                    <Icon.star />
                </div>
            </div>

            <div className="side">
                {
                    testimonials.map((value, index) => {
                        return <Testimonial key={`${value}_${index}`} {...value} />
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialsBlock;