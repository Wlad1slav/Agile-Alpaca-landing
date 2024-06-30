import ServiceCard from "@/components/_blocks/Services/ServicesCard/ServiceCard";

import '@/components/_blocks/Services/ServicesCard/styles/service-cards.block.scss';

function ServiceCards({cards}: Readonly<{
    cards: Array<OptionSelectionCardProps>;
}>) {
    return (
        <div className="option-selection-cards">
            {
                cards.map((value) => {
                    return <ServiceCard {...value} />
                })
            }
        </div>
    );
}

export default ServiceCards;