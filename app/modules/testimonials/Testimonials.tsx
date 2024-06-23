import Icon from "@/app/components/general/icon/Icon";
import Testimonial from "@/app/components/testimonial/Testimonial";

import './testimonials.scss';

function Testimonials({testimonials}: Readonly<{
    testimonials: Array<ComponentTestimonialInterface>;
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

export default Testimonials;