import './styles/testimonial.scss';

function Testimonial({name, photoUrl, text}: TestimonialProps) {
    return (
        <div className="testimonial">
            <div className="head">
                <img src={photoUrl} alt={`${name} photo`} loading='lazy' />
                <h3>{name}</h3>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default Testimonial;