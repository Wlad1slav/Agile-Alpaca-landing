import ServiceContainer from "@/app/components/services/ServiceContainer";

import './style/services-block.scss';
import {services} from "@/app/config/services.config";

function ServicesBlock() {
    return (
        <div className='block--services'>
            {
                services.map((service, num) => {
                    return <ServiceContainer
                        key={num}
                        title={service.name}
                        text={service.description}
                        color={(num+1) % 2 === 0 ? 'dark' : 'light'}
                    />
                })
            }
        </div>
    );
}

export default ServicesBlock;