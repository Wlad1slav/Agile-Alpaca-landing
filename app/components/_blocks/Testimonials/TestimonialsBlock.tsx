import Icon from "@/app/components/_general/icon/Icon";
import Testimonial from "@/app/components/_blocks/Testimonials/Testimonial";

import './styles/testimonials.block.scss';

function TestimonialsBlock({testimonials}: Readonly<{
    testimonials: Array<TestimonialProps>;
}>) {
    return (
        <div className="testimonials">
            <div className="side">
                <h2>What our <br/>customers say</h2>

                <div className="quote">
                    <Icon.quote />
                    <p>
                        Agile Alpaca transformed our business, guiding us from local markets to international success.
                        Their expertise in e-commerce and ongoing support have been invaluable.
                    </p>
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
                    testimonials.map((value) => {
                        return <Testimonial {...value} />
                    })
                }
            </div>
        </div>
    )
}

export default TestimonialsBlock;