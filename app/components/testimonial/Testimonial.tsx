import './style/testimonial.scss';

function Testimonial({name, photoUrl, text}: ComponentTestimonialInterface) {
    return (
        <div className="testimonial">
            <div className="head">
                <img src={photoUrl} alt={name}/>
                <h3>{name}</h3>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default Testimonial;