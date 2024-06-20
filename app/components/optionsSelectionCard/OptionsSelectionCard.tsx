import './style/option-selection-card.scss';

function OptionsSelectionCard({text, title, imgUrl, subText, price, priceWithOutDiscount}: Readonly<ComponentOptionSelectionCardInterface>) {
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
                    <p className="time">Per hour</p>
                    <p className="price">
                        ${price} <span className="discount"> ${priceWithOutDiscount} </span>
                    </p>
                </div>

                <button>Learn more →</button>
            </div>
        </div>
    );
}

export default OptionsSelectionCard;