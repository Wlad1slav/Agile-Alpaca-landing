import '@/components/_blocks/Services/ServicesCard/styles/service-card.scss';

function ServiceCard({text, title, imgUrl, subText, price, priceWithOutDiscount, priceLabel}: Readonly<OptionSelectionCardProps>) {
    return (
        <div className="option-selection-card">
            <div className='header-container'>
                <img src={imgUrl} alt={title}/>

                <div className="info">
                    <p className="subtext">
                        {subText}
                    </p>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {text}
                    </p>
                </div>
            </div>

            <div className="bottom-container">
                <div className="price-container">
                    <p className="time">{priceLabel}</p>
                    <p className="price">
                        ${price} <span className="discount"> ${priceWithOutDiscount} </span>
                    </p>
                </div>

                <button>Learn more →</button>
            </div>
        </div>
    );
}

export default ServiceCard;