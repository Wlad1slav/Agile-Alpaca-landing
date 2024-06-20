import OptionsSelectionCard from "@/app/components/optionsSelectionCard/OptionsSelectionCard";

import './option-selection-cards.scss';

function OptionSelectionCards({cards}: Readonly<{
    cards: Array<ComponentOptionSelectionCardInterface>;
}>) {
    return (
        <div className="option-selection-cards">
            {
                cards.map((value) => {
                    return <OptionsSelectionCard
                        text={value.text}
                        title={value.title}
                        imgUrl={value.imgUrl}
                        subText={value.subText}
                        price={value.price}
                        priceWithOutDiscount={value.priceWithOutDiscount}
                        key={value.title}
                    />
                })
            }
        </div>
    );
}

export default OptionSelectionCards;