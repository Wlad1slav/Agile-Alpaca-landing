import OptionSelectionCard from "@/components/_blocks/OptionSelectionCards/OptionSelectionCard";

import './styles/option-selection-cards.block.scss';

function OptionSelectionCardsBlock({cards}: Readonly<{
    cards: Array<OptionSelectionCardProps>;
}>) {
    return (
        <div className="option-selection-cards">
            {
                cards.map((value) => {
                    return <OptionSelectionCard {...value} />
                })
            }
        </div>
    );
}

export default OptionSelectionCardsBlock;